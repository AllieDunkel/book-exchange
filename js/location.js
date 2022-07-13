/**
* @file location.js
* @date 2022-07-13
* @author dsfrey
* @description Constructor function for location objects
*/
'use strict';

/**
 * @param {string} address - Street Address
 * @param {string} city - City name
 * @param {string} state - 2 letter state code
 * @param {number} zip - ZIP code
 */
function ExchangeLocation (address,city,state,zip) {
  this.address = address;
  this.city = city;
  this.state = state;
  this.zip = zip;
}
