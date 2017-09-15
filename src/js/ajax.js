'use strict';

const headers = new Headers();
headers.append('Content-Type', 'application/json');

const fetchSettings = {
  method: 'GET',
  headers: headers,
  mode: 'cors',
  cache: 'default'
};

//Getting user from server
export default function getFetchedData({id, social}) {
  return fetch(`https://rocky-wave-77774.herokuapp.com/${social}/${id}`, fetchSettings)
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      console.log('Network error occured.');
    })
    .catch(err => err);
}
