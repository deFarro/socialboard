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
        parsed.users[id - 1].social = social;
        insertAction(parsed.users[id - 1]);
      })
      .catch(err => insertAction(err));
  }, 1500);
}
