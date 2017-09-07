'use strict';

// const headers = new Headers();
// headers.append('Content-Type', 'application/json');
//
// const fetchSettings = {
//   method: 'GET',
//   headers: headers,
//   mode: 'cors',
//   cache: 'default'
// };

// Function to mock social networks API requests. Real API returns only one user, not a database.
export default function getFetchedData({id, social}) {
  return fetch(`../mock_backend/${social}.json`)
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      console.log('Network error occured.');
    })
    .then(parsed => {
      const user = parsed.users[id - 1];
      user.social = social;
      // Need to pass third argument in form of 'new Date()' in order to count posts from current date.
      user.postsMap = mapPostsCalendar(user.postsCalendar);
      return user;
    })
    .catch(err => err);
}

// Function to track activity in last 12 month. Better be moved to server.
// I've added fixed date as default third argument only in presentational purposes.
const mapPostsCalendar = (calendar, range = 12, now = new Date(1504728142544)) => {
  const postsPerMonth = [];
  const calendarWithDates = calendar.map(date => new Date(date));
  const filtered = calendarWithDates.filter(date => (now.getTime() - date.getTime()) < (365 * 24 * 60 * 60 * 1000));
  
  for (let i = range - 1; i >= 0 ; i--) {
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

export { mapPostsCalendar };
