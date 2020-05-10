var favoriteBooks = [];

function addFavoriteBook(book) {
  if (!book.includes("Great")) {
    favoriteBooks.push(book);
    console.log(book);
  }
}
function printFavoriteBooks(book) {
  console.log(book);
}

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");
