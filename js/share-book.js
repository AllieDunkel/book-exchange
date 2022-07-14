/**
* @file share-books.js
* @date 2022-07-14
* @author mkariuki
* @description adding added book to browse books
*/
'use strict';
addBooksStorage();
// storing books to local storage

/**
 * get array of books from local storage, add new book to array, store array back to local storage
 * 
 * @param {Book} book -  book to add
 */
function addBooksStorage(book) {
    let books = getBooksStorage();
    console.log ('addBooksStorage',books);
    books.push(book);
    localStorage.setItem(libraryKey,books);
}
 
 // getting books from storage


 /** 
  * returns books from array
  * 
  * @returns {array} - the array of books from local storage
  */
 function getBooksStorage(){
    let result = localStorage.getItem(libraryKey)
    console.log('getBooksStorage', result);
    if (result === null){
        return[];
      } else{
        let arrayString = JSON.parse(result);
        //structure
        return result;
      }
    };
  //add new book to existing array.
  addBook = function(book ,author){
    console.log('adding book')

  }

handleSubmit(){
 let titleValue = document.getElementbyId("title").value;
 let authorValue = document.getElementById("author").value;
 submit(titleValue,authorValue);
}
// give user a token for traded in book
function updateTokens (){
    let tokenCount = document.getElementsById("tokenCount");
    tokenCount.textContent = fillStockForTesting.set.length;
  }