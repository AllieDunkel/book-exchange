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

/**
 * Removes the value from current user
 */
function logOut() {
  userDataObject.currentUser = null;
  localStorage.setItem(userKey, JSON.stringify(userDataObject));
}

/**
 * Creates a new user object
 * @param {string} userName - Name that appears for the user
 * @param {string} email - Unique email associated with this account
 */
function User(userName,email) {
  this.Name = userName;
  this.email = email;
  this.tokens = 0;
  this.bookshelf = [];
}
