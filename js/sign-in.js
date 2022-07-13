"use strict";

/**
 * press on the button it will return "Welcome <user>"
 * it will store that the user logged in
 *
 */
function handleButton() {
  let nameValue = document.getElementById("name").value;
  let emailValue = document.getElementById("email").value;
  let user = new User(nameValue, emailValue);
  localStorage.setItem(userKey, JSON.stringify(user));
  let greeting = document.getElementById("greeting");
  greeting.textContent = `Welcome ${nameValue}`;
}
