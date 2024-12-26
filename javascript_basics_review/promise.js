function loadJson(url) {
  return fetch(url).then(response => response.json());
}

function showUserName(user) {
  return console.log(user.name);
}

loadJson('https://jsonplaceholder.typicode.com/users/1')
  .then(showUserName);
