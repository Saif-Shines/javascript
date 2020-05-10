var BOOK_API = "https://some.url/api";
var favBooks;

class Bookshelf {
  constructor() {
    this.favoriteBooks = [];
  }

  addFavoriteBook(bookName) {
    if (!bookName.includes("Great")) {
      this.favoriteBooks.push(bookName);
    }
  }

  printFavoriteBooks() {
    console.log(`Favorite Books: ${this.favoriteBooks.length}`);
    for (let bookName of this.favoriteBooks) {
      console.log(String(bookName));
    }
  }
}

function loadBooks(bookShelf) {
  fakeAjax(BOOK_API, function oneBook(allBooks) {
    for (let eachBook of allBooks) {
      bookShelf.addFavoriteBook(eachBook);
    }
    bookShelf.printFavoriteBooks();
  });
}

bookShelf = new Bookshelf();
loadBooks(bookShelf);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
  setTimeout(function fakeLoadingDelay() {
    cb([
      "A Song of Ice and Fire",
      "The Great Gatsby",
      "Crime & Punishment",
      "Great Expectations",
      "You Don't Know JS",
    ]);
  }, 500);
}