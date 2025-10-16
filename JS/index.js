console.log('Ankit');
var a = 10;
let b = 20;
console.log(a + b);
{
    let c = 30;
    var a = 100;
    console.log(a + b + c);
}
// console.log(c); // Error: c is not defined
console.log(a + b);
//var is function scoped
//let and const are block scoped
function sum(a,b) {
    return a + b;
}
console.log(sum(10,20));
// Arrow function
const sum2 = (b,a=2) => a + b;
console.log(sum2(40));

//backticks
let name = 'Ankit';
let age = 24;
console.log('My name is ' + name + ' and my age is ' + age);
console.log(`My name is ${name} and my age is ${age}`);

//TCB Thread Control Block

function loginUser(){
    setTimeout(() => {
        console.log('User logged in');
    }, 2000);
}
function getUser(){
    console.log('Getting user details');
} 
loginUser();
getUser();
//Output
// Getting user details
// User logged in

//Callback Hell
function loginUserCB(callback){
    setTimeout(() => {
        console.log('User logged in');
        callback();
    }, 2000);
}
function getUserCB(callback){
    setTimeout(() => {
        console.log('Getting user details');
        callback();
    }, 1000);
}
function displayUserCB(){
    setTimeout(() => {
        console.log('Displaying user details');
    }, 500);
}
loginUserCB(function(){
    getUserCB(function(){
        displayUserCB();
    });
});
//Output
// User logged in
// Getting user details
// Displaying user details

function registerr(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('User registered');
            resolve();
        }, 4000);
    });
}
function sendEmail(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Email sent');
            resolve();
        }, 4000);
    });
}
function displayData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Displaying user data');
            resolve();
        }, 2000);
    });
}
registerr()
.then(sendEmail)
.then(displayData)
.catch(() => {
    console.log('Error occurred');
});
