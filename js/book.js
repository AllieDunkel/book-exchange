/**
* @file book.js
* @date 2022-07-13
* @author dsfrey
* @description Constructor function for book objects
*/
'use strict';

/**
 * @param {string} title - Title of book
 * @param {string} author - Author of book
 * @param {number} isbn - ISBN of book; may be omitted
 * @param {array} attributes - Array of strings for attributes of books, e.g. fiction/non, genre, age group; may be omitted
 */
function Book(title,author,isbn = NaN,attributes = []) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  this.attributes = attributes;
  this.qty = 0;
}
