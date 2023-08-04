const btn = document.getElementById("btn-text");
const api = document.getElementById("btn-api");
btn.addEventListener("click", getText);
api.addEventListener("click", getApiAsync);

function getText(e) {
  e.preventDefault();

  fetch("text.txt")
    .then((file) => file.text())
    .then((filetext) => console.log(filetext))
    .catch((err) => console.log(err));
}

function getApi(e) {
  e.preventDefault();

  fetch("https://jsonplaceholder.typicode.com/posts", {
    //EMPTY
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
}

async function getApiAsync(e) {
  e.preventDefault();

  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //EMPTY
  });

  const result = await response.json();
  console.log(result);
}
