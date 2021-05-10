// let p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 2) {
//     resolve("success");
//   } else {
//     reject("failed");
//   }
// });

// p.then((message) => {
//   console.log("this is in the then " + message);
// }).catch((message) => {
//   console.log("this is in the catch " + message);
// });

// const userLeft = true;
// const userWatchingCatMeme = false;

// function watchTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if (userLeft) {
//       reject({
//         name: "user left",
//         message: ":{",
//       });
//     } else if (userWatchingCatMeme) {
//       reject({
//         name: "User Waching Cat Meme",
//         message: "WebDevSimplified < Cat",
//       });
//     } else {
//       resolve("Thumbs up and Subscribe");
//     }
//   });
// }

// watchTutorialPromise()
//   .then((message) => {
//     console.log("Success: " + message);
//   })
//   .catch((error) => {
//     console.log(error.name + "" + error.message);
//   });

const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);
