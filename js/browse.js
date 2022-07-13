/**
* @file browse.js
* @date 2022-07-13
* @author jordanLindo
* @description javaScript for browse page.
*/


/**********************************************************************************
    GLOBAL
**********************************************************************************/

var library;

/**
 * The start point for this js file
 */
function initializeBrowse(){
    library = getLibrary();
    renderLibrary();
}


/**
 * Check local storage for the current library if
 * not available an empty array should be returned
 * 
 * @returns {array} current library or an empty array.
 */
function getLibrary(){
    let aLibrary =  localStorage.getItem("our-library");
    let result = JSON.parse(aLibrary);
    if(aLibrary == null){
        result = [];
    }

    return result;
}


function renderLibrary(){
    let div = document.getElementById('libraryCards');
    library.forEach(element => {
        let innerDiv = document.createElement('div');
        let title = document.createElement('h3');
        title.innerText = element.title;
        innerDiv.appendChild(title);
        let author = document.createElement('p');
        author.innerText = element.author;
        innerDiv.appendChild(author);

        if(element.attributes.length > 0){
            let ul = document.createElement("ul");
            element.attributes.forEach(attribute => {
                let li = document.createElement("li");
                li.innerText = attribute;
                ul.appendChild(li);
            });
            innerDiv.appendChild(ul);
        }
        let button = document.createElement("button");
        button.innerText = "Add to Shelf";

    });
}

