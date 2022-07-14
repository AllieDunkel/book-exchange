"use strict";

/**
 * press on the button it will return "Welcome <user>"
 * it will store that the user logged in
 *
 */
function handleButton() {
  let nameValue = document.getElementById("name").value;
  let emailValue = document.getElementById("email").value;
  logIn(nameValue,emailValue);
  let greeting = document.getElementById("greeting");
  greeting.textContent = `Welcome ${nameValue}`;
}

/**
 * Takes the logIn information and retrieves that user from memory or creates a new user
 * @param {string} userName - Name that appears for the user
 * @param {string} email - Unique email associated with this account
 */
function logIn(userName,email) {
  let userLogIn;
  let isNewUser = true;
  if (userDataObject.currentUser !== null) {
    logOut();
  }
  for (let i = 0; i < userDataObject.allUsers.length; i++) {
    if (userDataObject.allUsers[i].email === email) {
      isNewUser = false;
      userLogIn = userDataObject.allUsers[i];
      break;
    }
  }
  if (isNewUser) {
    userLogIn = new User(userName,email);
    userDataObject.allUsers.push(userLogIn);
  }
  userDataObject.currentUser = userLogIn;
  localStorage.setItem(userKey, JSON.stringify(userDataObject));
}
