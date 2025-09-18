async function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Ankit logged in");
            resolve();
        }, 1000);
    });
}
async function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Showing Ankit details");
            resolve();
        }, 3000);
    });
}
async function CalculateData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Calculating Ankit data");
            resolve();
        }, 2000);
    });
}
async function displayData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Here is the Ankit data");
            resolve();
        }, 5000);
    });
}
async function sendSMS() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Send SMS to Ankit");
            resolve();
        }, 1000);
    });
}
async function logout() {
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
