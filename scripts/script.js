import { GOOGLE_URL, searchTerm, searchBtn, grid } from "./variables.js";
import { createCard } from "./card.js";

// const booksArr = await getBooks("Daniel Keyes Flowers for Algernon");

//event listener to display books based on search results
searchBtn.addEventListener("click", async () => {
  //on click -> grab search term
  const searchTermInput = searchTerm.value;
  //fetch data -> get an array of books
  const booksArr = await getBooks(searchTermInput);
  //go through array -> book {}
  const booksArrWithDataToRender = booksArr.map((book) => {
    //get data function
    return getBookData(book);
  });
  //create a card for each book
  booksArrWithDataToRender.forEach((book) => {
    createCard(book);
  });
});

//function to fetch book as per search request
const getBooks = async (searchTerms) => {
  const response = await fetch(`${GOOGLE_URL}${searchTerms}`);
  const books = await response.json();
  return await books.items;
};

//function to get a book object with some information to display {image, title, author, description}
const getBookData = (book) => {
  const bookImage = book.volumeInfo.imageLinks.thumbnail;
  const bookAuthor = book.volumeInfo.authors;
  const bookTitle = book.volumeInfo.title;
  const bookDescription = book.volumeInfo.description;
  return {
    image: bookImage,
    author: bookAuthor,
    title: bookTitle,
    description: bookDescription,
  };
};
