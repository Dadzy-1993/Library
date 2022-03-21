let myLibrary = [];

function Book() {
}
Book.prototype.pushToArray = function(title) {
    myLibrary.unshift(title);
    console.log(myLibrary);
}
function addToLibrary(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};
addToLibrary.prototype = Object.create(Book.prototype);

// test books for tiles
const theHobbit = new addToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
const harryPotter = new addToLibrary('Harry Potter', 'J.K. Rowling', 412, false);

theHobbit.pushToArray(theHobbit);
harryPotter.pushToArray(harryPotter);

// check if checkbox is ticked for read
function checkBox() {    
    if (document.getElementById('read').checked) {
        console.log('ticked')
        return true       
    }
    else{
        return false
    }
};
// places remove button on tiles
function deleteButton (tile, indexi) {
    let deleteTile = document.createElement('button');
    deleteTile.setAttribute('class', 'remove');
    deleteTile.setAttribute('id', indexi)
    deleteTile.innerHTML = 'Remove';
    tile.appendChild(deleteTile);
};
//function to create new tiles
let indexi = 1;
function createBook (title, author, pages, read) {
    let newBook = new addToLibrary(title, author, pages, read);
    newBook.pushToArray(newBook);
    let tile = document.createElement('div');
    tile.setAttribute('class', 'tile');
    tile.setAttribute('id', indexi)
    tile.innerHTML = `${title} <br> ${author} <br> Pages: ${pages}`
    deleteButton(tile, indexi);
    containerTiles.appendChild(tile); 
    indexi++;
};
// creates the tiles to display the books
const containerTiles = document.getElementById('book-tiles');
myLibrary.forEach(function (item) { // adds a tile for each book in array
    let tile = document.createElement('div');
    tile.setAttribute('class', 'tile');
    if (item.read === true) {
        tile.innerHTML = `${item.title} <br> ${item.author} <br> Pages: ${item.pages}<br> Read`
    }
    else if (item.read === false) {
        tile.innerHTML = `${item.title} <br> ${item.author} <br> Pages: ${item.pages}<br> Unread`
    }
    containerTiles.appendChild(tile);
    deleteButton(tile);
});
// click add new pops up entry form below
const addNew = document.querySelector('#add-new');// add new button
addNew.addEventListener('click', () => {
    console.log('popup');
    document.getElementById('form').style.display = 'block';//shows form on click
});
// hides the form by default
document.querySelector('#form').style.display = 'none';
// hides the form when user clicks cancel
const cancel = document.getElementById('cancel');// cancel button
cancel.addEventListener('click', () => {
    console.log('close popup'); 
    document.querySelector('#form').style.display = 'none';// hides form
});
// submit button variable
const subButt = document.getElementById('submit');
subButt.addEventListener('click', () => {
    console.log('submit');
    let titleValue = document.getElementById('title').value;
    let authorValue = document.getElementById('author').value;
    let pageValue = document.getElementById('pages').value;
    let readValue = document.getElementById('readbox').value;
    createBook(titleValue, authorValue, pageValue, readValue);
//    console.log(titleValue, authorValue, pageValue, readValue);
})
// remove button functionality
const remButt = containerTiles.getElementsByClassName('remove');
for (let item of remButt) {
    item.addEventListener('click', () => {
    console.log(containerTiles.getElementById('indexi'));

//        
})}
