/**
* @file browse.js
* @date 2022-07-13
* @author jordanLindo
* @description javaScript for browse page.
*/


/**********************************************************************************
    GLOBAL
**********************************************************************************/

let library;
const libraryKey = 'our-library';
let currentUser;
userDataObject;

/**
 * The start point for this js file
 */
function initializeBrowse(){
    library = getLibrary();
    renderLibrary(library);
    userDataObject = new UserData();
    currentUser = userDataObject.currentUser;
}


/**
 * Check local storage for the current library if
 * not available an empty array should be returned
 *
 * @returns {array} current library or an empty array.
 */
function getLibrary(){
  let aLibrary =  localStorage.getItem(libraryKey);
  let result = JSON.parse(aLibrary);
  if(aLibrary == null){
    result = [];
  }

  return result;
}



function searchBooks(){
  let searchTerm = (document.getElementById('searchBar').value).toLowerCase();

  let resultSet = [];
  for (let i = 0; i < library.length; i++) {
    const element = library[i];
    let lowerTitle = element.title.toLowerCase();
    let lowerAuthor = element.author.toLowerCase();
    if(lowerTitle.includes(searchTerm) || lowerAuthor.includes(searchTerm)){
      resultSet.push(element);
    }else if(element.attributes.length > 0){
      for (let i = 0; i < element.attributes.length; i++) {
        const attribute = element.attributes[i];
        let lowerAttribute = attribute.toLowerCase();
        if(lowerAttribute === searchTerm){
          resultSet.push(element);
          break;
        }
      }
    }
  }
  renderLibrary(resultSet);
}

/**
 *  Display the library
 */
function renderLibrary(set){
  let div = document.getElementById('libraryCards');
  div.innerHTML = '';
  if(set.length > 0){
    set.forEach(element => {
      let innerDiv = document.createElement('div');
      innerDiv.classList.add('card');
      let title = document.createElement('h3');
      title.innerText = element.title;
      innerDiv.appendChild(title);
      let author = document.createElement('p');
      author.innerText = element.author;
      innerDiv.appendChild(author);
      let ul = document.createElement('ul');
      if(element.attributes.length > 0){
        element.attributes.forEach(attribute => {
          let li = document.createElement('li');
          li.innerText = attribute;
          ul.appendChild(li);
        });
      }
      innerDiv.appendChild(ul);
      let button = document.createElement('button');
      button.innerText = 'Add to Shelf';
      button.addEventListener('click', addToShelf);
      innerDiv.appendChild(button);

      div.appendChild(innerDiv);
    });
  }
}

function addToShelf(event){
    let text = event.path[1].childNodes[0].innerText;
    
    for (let i = 0; i < library.length; i++) {
        const element = library[i];
        if(element.title === text){
            //ADD BOOK TO CART
            currentUser.bookshelf.push(new Book(element.title,element.author,element.isbn,element.attributes,element.quantity));
            updateUserShelf();
            library.splice(i,1);
            break;
        }
    }

  for (let i = 0; i < library.length; i++) {
    const element = library[i];
    if(element.title === text){
      //ADD BOOK TO CART
      currentUser.bookshelf.push(new Book(element.title,element.author,element.isbn,element.attributes,element.quantity));
      library.splice(i,1);
      break;
    }
  }

  renderLibrary(library);
}

function updateUserShelf(){
    userDataObject.allUsers[userDataObject.currentUser.index] = userDataObject.currentUser;
    localStorage.setItem(userKey, JSON.stringify(userDataObject));
}

/**
 * Create a sample data set
 */
function fillStockForTesting(){
  let aLibrary = getLibrary();
  if(aLibrary.length == 0){
    let set = [new Book('The Art of War','Sun Tzu'),
      new Book('The Origin of Species','Charles Darwin'),
      new Book('Debugging Your Brain','Casey Watts', NaN, ['Psychology', 'Success']),
      new Book('The Ego and the Id','Sigmund Freud', NaN, ['Psychology']),
      new Book('Java For Dummies','Barry A. Burd'),
      new Book('JavaScript For Dummies Quick Reference','Emily A. Vander Veer'),
      new Book('Debugging Your Brain','Casey Watts', NaN, ['Psychology']),
      new Book('A Book of Five Rings','Miyamoto Musashi', NaN, ['Success']),
      new Book('The Pragmatic Programmer','David Thomas, Andrew Hunt', NaN, ['Programming']),
      new Book('Think Like A Programmer','V. Anton Spraul', NaN, ['Programming']),
      new Book('The Forgetting Machine: Memory, Perception, and the "Jennifer Aniston Neuron"',
        'Rodrigo Quian Quiroga', NaN, ['Psychology','Neuroscience']),
      new Book('Negative Space','B.R. Yeager', NaN, ['Fiction']),
      new Book('The Man in the High Castle','Philip K. Dick', NaN, ['Fiction']),
      new Book('The Man in the High Castle','Philip K. Dick', NaN, ['Fiction'])
    ];

    localStorage.setItem(libraryKey, JSON.stringify(set));
  }
}

