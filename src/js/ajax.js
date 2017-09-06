'use strict';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

const fetchSettings = {
  method: 'GET',
  headers: headers,
  mode: 'cors',
  cache: 'default'
};

// Function to mock social networks API requests. Real API returns only one user, not a database.
export default function getFetchedData({id, social}, insertAction) {
  setTimeout(() => {
    fetch(`../mock_backend/${social}.json`)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        console.log('Network error occured.');
      })
      .then(parsed => {
        const user = parsed.users[id - 1];
        user.social = social;
        user.postsMap = mapPostsCalendar(user.postsCalendar);
        insertAction(user);
      })
      .catch(err => {
        console.log(err);
        insertAction(err);});
  }, 1500);
}

// Function to track activity in last 12 month. Better be moved to server
const mapPostsCalendar = (calendar, range = 11) => {
  const postsPerMonth = [];
  const now = new Date();

  const calendarWithDates = calendar.map(date => new Date(date));
  const filtered = calendarWithDates.filter(date => (now.getTime() - date.getTime()) < (365 * 24 * 60 * 60 * 1000));

  for (let i = range; i >= 0 ; i--) {
    const currentMonth = now.getMonth() - i >= 0 ? now.getMonth() - i : now.getMonth() - i + 12;
    // Ignore same month year ago
    if (i === 0) {
      postsPerMonth.push(filtered.filter(date => date.getMonth() === currentMonth && date.getYear() === now.getYear()).length);
      continue;
    }
    postsPerMonth.push(filtered.filter(date => date.getMonth() === currentMonth).length);
  }
  return postsPerMonth;
}
