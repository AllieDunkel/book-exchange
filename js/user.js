/**
* @file user.js
* @date 2022-07-13
* @author dsfrey
* @description Controls for user objects
*/
'use strict';

const userKey="userKey";
let userDataObject = new UserData();

/**
 * Constructs an object to contain all user data, either pulling from storage or initializing with empty values
 */
function UserData() {
  if (localStorage.getItem(userKey) === null) {
    this.allUsers = [];
    this.currentUser = null;
  } else {
    let storedData = JSON.parse(localStorage.getItem(userKey));
    this.allUsers = storedData.allUsers;
    this.currentUser = storedData.currentUser;
  }
}

function checkLoggedIn () {
  if (userDataObject.currentUser !== null) {
    let logInArea = document.getElementById('logInArea');
    logInArea.innerHTML = '';
    let greeting = document.createElement('a');
    greeting.innerText = `Welcome ${userDataObject.currentUser.name}`;
    let button = document.createElement('button');
    button.innerText = 'Log Out';
    button.setAttribute('onclick','logOut()');
    logInArea.appendChild(greeting);
    logInArea.appendChild(button);
  }
}

/**
 * Removes the value from current user
 */
function logOut() {
  console.log('in logout');
  userDataObject.allUsers[userDataObject.currentUser.index] = userDataObject.currentUser;
  userDataObject.currentUser = null;
  localStorage.setItem(userKey, JSON.stringify(userDataObject));
  let logInArea = document.getElementById('logInArea');
  logInArea.innerHTML = '<a href="sign-in.html"> Sign in </a>';
}

/**
 * Creates a new user object
 * @param {string} userName - Name that appears for the user
 * @param {string} email - Unique email associated with this account
 */
function User(userName,email) {
  this.name = userName;
  this.email = email;
  this.tokens = 0;
  this.bookshelf = [];
  this.index = userDataObject.allUsers.length;
}
