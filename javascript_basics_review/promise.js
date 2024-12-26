function loadJson(url) {
  return fetch(url).then(response => response.json());
}

function showUserName(user) {
  return console.log(user.name);
}

loadJson('https://jsonplaceholder.typicode.com/users/1')
// loadJson('https://jsonplaceholder.typicod.com/users/1')
  .then(showUserName)
  .catch(error => console.log(error))
