const promiseOne = new Promise(function (resolve, reject) {
  //do  an asyc task
  // db calls,network
  setTimeout(function () {
    console.log("async task  one is done");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("promise one is consumed");
});
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Asyc task two is done ");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise two consumed");
});

const promisethree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "exxample@gmail.com" });
  }, 1000);
});
promisethree.then(function (user) {
  console.log(user);
});

const promisefor = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR SOMETHING WENT WRONG");
    }
  }, 1000);
});
promisefor
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
    return promisefor;
  })
  .then((user) => {
    console.log(user);
    return user.password;
  })
  .then((password) => {
    console.log(password);
  })

  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("the promise is either resolved or rejected");
  });

const promisefive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "js", password: "123" });
    } else {
      reject("ERROR: js WENT WRONG");
    }
  }, 1000);
});
async function consumepromoisefive() {
  try {
    const response = await promisefive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumepromoisefive();

// async function getalluser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// getalluser();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    "E:", error;
  });
