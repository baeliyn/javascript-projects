function getUser(id) {
  console.log(`user ${id}'s informations are fetching`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "bera", id: id });
    }, 2000);
  });
}

function getCourses(username) {
  console.log(`${username}'s courses are fetching`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["java", "js", "flutter"]);
    }, 2000);
  });
}

function getComments(course) {
  console.log(`${course} comments`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("great!");
    }, 2000);
  });
}

/*
CON FU SING
getUser(123).then((user) => {
  getCourses(user).then((course) => {
    getComments(course).then((comment) => {
      console.log(comment);
    });
  });
});
*/

getUser(123)
  .then((user) => getCourses(user))
  .then((courses) => getComments(courses))
  .then((comment) => console.log(comment))
  .catch((error) => console.log(error));
