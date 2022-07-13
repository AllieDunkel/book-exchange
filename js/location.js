/**
* @file location.js
* @date 2022-07-13
* @author dsfrey
* @description Constructor function for location objects
*/
'use strict';

/**
 * @param {string} address
 * @param {string} city
 * @param {string} state
 * @param {number} zip - ZIP code
 */
function ExchangeLocation (address,city,state,zip) {
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
}
