/**
* @file user.js
* @date 2022-07-13
* @author dsfrey
* @description Constructor function for user objects
*/
'use strict';

const userKey="userKey";


function User(userName,email) {
  this.Name = userName;
  this.email = email;
  this.tokens = 0;
}
