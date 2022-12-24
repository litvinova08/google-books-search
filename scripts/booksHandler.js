import { GOOGLE_URL } from "./variables.js";
import { createCard } from "./card.js";



//function to fetch book as per search request
export const getBooks = async (searchTerms) => {
  const response = await fetch(`${GOOGLE_URL}${searchTerms}`);
  const books = await response.json();
  return await books.items;
};

//function to get a book object with some information to display
export const getBookData = (book) => {
  let checkAuthors = book.volumeInfo.authors;
  if (checkAuthors.length > 2) {
    checkAuthors = `${checkAuthors[0]} et al.`;
  }

  return {
    image: (book.volumeInfo.imageLinks.thumbnail ?? "https://loremflickr.com/g/300/200/dog" ), // test this line
    author: checkAuthors,
    title: book.volumeInfo.title,
    description: book.volumeInfo.description,
    publishDate: book.volumeInfo.publishedDate,
    publisher: book.volumeInfo.publisher,
    languages: book.volumeInfo.language,
  };
};

//function to rendeer a grid of books
export const renderGrid = (booksArr) => {
  const booksArrWithDataToRender = booksArr.map((book) => getBookData(book));
  //create a card for each book
  return booksArrWithDataToRender.forEach((book) => createCard(book));
};
