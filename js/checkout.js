"use strict"

// shows the books in/on the shelf
//call the construtor 

/**
 * get the current user from local storage, get there list of books, display them as a list on the page 
 */

function initilizeCheckout(){
  if (userDataObject.currentUser === null) {
    window.location = 'sign-in.html';
  }
  let bookshelf=  userDataObject.currentUser.bookshelf;
  let bookList= document.getElementById("listOfBooks");
  for (let i = 0; i < bookshelf.length; i++) {
    const element = bookshelf[i];
    let item=document.createElement("li");
      // let text= `${element.title} ${element.author}`;
      // item.innerHTML= text;
    let checkbox=document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", element.title);
    item.appendChild(checkbox);
    let label=document.createElement("label");
    label.setAttribute("for", element.title);
    label.textContent=`${element.title} - ${element.author}`;
    item.appendChild(label);


    bookList.appendChild(item); 
}
let item= document.createElement("li");
let currentBooksInShelf= userDataObject.currentUser.bookshelf.length;
let text2= currentBooksInShelf;
item.innerHTML= "Total: "+ currentBooksInShelf;
bookList.appendChild(item);
}


/**
 * the user wants to reserve books but they have to have enough tokens in order to do that
 */

function reserveBooks (){
  // shows the current tokens that the user has
  let currentUserTokens = userDataObject.currentUser.tokens;
  console.log(userDataObject.currentUser.tokensgit);
  // shows the total books they have in/on the shelf
  let currentBooksInShelf= userDataObject.currentUser.bookshelf.length;
  // check to see if the user has enough tokens
  if(currentBooksInShelf != currentUserTokens){
    alert('You do not have enough tokens.'); 
  } else if(currentBooksInShelf => currentUserTokens){
     // now the user can move on and click the button 
    handleReserveButton();
  }
}

/**
 * once the user clicks on the button the response will pop up underneath in a span
 */

function handleReserveButton(){
  let endGreeting = document.getElementById("endGreeting");
  endGreeting.innerHTML = "Thank you for your order, you will receive an email in 2-3 business days explaining when and where you can pick up your order.";
}	


