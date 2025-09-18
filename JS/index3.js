// function login(cb) {
//   setTimeout(() => {
//     console.log("Ankit logged in");
//     cb();
//   }, 1000);
// }
// function getData(cb) {
//   setTimeout(() => {
//     console.log("Showing Ankit details");
//     cb();
//   }, 3000);
// }
// function CalculateData(cb) {
//   setTimeout(() => {
//     console.log("Calculating Ankit data");
//     cb();
//   }, 2000);
// }
// function displayData(cb) {
//   setTimeout(() => {
//     console.log("Here is the Ankit data");
//     cb();
//   }, 5000);
// }
// function sendSMS(cb) {
//   setTimeout(() => {
//     console.log("Send SMS to Ankit");
//     cb();
//   }, 1000);
// }
// function logout() {
//   setTimeout(() => {
//     console.log("Ankit logged out");
//   }, 500);
// }

// login(function() {
//   getData(function() {
//     CalculateData(function() {
//       displayData(function() {
//         sendSMS(function() {
//           logout();
//         });
//       });
//     });
//   });
// });



// async function login() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Ankit logged in");
//       resolve();
//     }, 1000);
//   });
// }
// async function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Showing Ankit details");
//       resolve();
//     }, 3000);
//   });
// }
// async function CalculateData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Calculating Ankit data");
//       resolve();
//     }, 2000);
//   });
// }
// async function displayData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Here is the Ankit data");
//       resolve();
//     }, 5000);
//   });
// }
// async function sendSMS() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Send SMS to Ankit");
//       resolve();
//     }, 1000);
//   });
// }
// async function logout() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Ankit logged out");
//       resolve();
//     }, 500);
//   });
// }

// await login();
// await getData();
// await CalculateData();
// await displayData();
// await sendSMS();
// await logout();



function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ankit logged in");
            resolve();
        }, 1000);
    });
}
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Showing Ankit details");
            resolve();
        }, 3000);
    });
}
function CalculateData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Calculating Ankit data");
            resolve();
        }, 2000);
    });
}
function displayData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Here is the Ankit data");
            resolve();
        }, 5000);
    });
}
function sendSMS() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Send SMS to Ankit");
            resolve();
        }, 1000);
    });
}
function logout() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ankit logged out");
            resolve();
        }, 500);
    });
}
login()
    .then(getData)
    .then(CalculateData)
    .then(displayData)
    .then(sendSMS)
    .then(logout)
    .catch(() => {
        console.log('Error occurred');
    });
