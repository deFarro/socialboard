'use strict';

// Function to mock social networks API requests. Real API returns only one user, not a database.
export default function getFetchedData({id, social}, insertAction) {
  setTimeout(() => {
    fetch(`../mock_backend/${social}.json`)
    .then(response => response.json())
    .then(parsed => {
      parsed.users[id - 1].social = social;
      insertAction(parsed.users[id - 1]);
    })
    .catch(err => console.log(err));
  }, 1500);
}
