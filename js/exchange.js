/**
* @file exchange.js
* @date 2022-07-13
* @author dsfrey
* @description Handles exchange history.
*/
'use strict';

/**
 * Constructor for object containing exchange history array
 * Checks local storage for stored history, otherwise creates a new empty history
 */
function ExchangeData() {
  if (localStorage.getItem('exchangeHistory') === null) {
    this.exchangeHistory = [];
  } else {
    let storedData = JSON.parse(localStorage.getItem('exchangeHistory'));
    this.exchangeHistory = storedData.exchangeHistory;
  }
}

/**
 * Creates a new exchange object, adds it to the exchange history array, then updates local storage
 * @param {object} bookIn - Book being shared (added to inventory); may be null
 * @param {object} bookOut - Book being reserved (removed from inventory); may be null
 * @param {string} userID - Email of user completing exchange
 * @param {object} location - Location of exchange taking place
 */
ExchangeData.prototype.addExchange = function(bookIn,bookOut,userID,location) {
  let newExchange = new Exchange(bookIn,bookOut,userID,location);
  this.exchangeHistory.push(newExchange);
  let stagedData = {'exchangeHistory': this.exchangeHistory};
  localStorage.setItem('exchangeHistory',JSON.stringify(stagedData));
};

/**
 * Constructor function for exchange objects
 * @param {object} bookIn - Book being shared (added to inventory); may be null
 * @param {object} bookOut - Book being reserved (removed from inventory); may be null
 * @param {string} userID - Email of user completing exchange
 * @param {object} location - Location of exchange taking place
 */
function Exchange(bookIn,bookOut,userID,location) {
  this.bookIn = bookIn;
  this.bookOut = bookOut;
  this.userID = userID;
  this.location = location;
}
