import { GOOGLE_URL, searchTerm, searchBtn, grid } from "./variables.js";

//function to create a card for each book
export const createCard = (book) => {
  let card = document.createElement("div");
  card.classList = "card";

  let elementBookTitle = document.createElement("h2");
  let bookTitleValue = book.title;
  let textNodeTitle = document.createTextNode(bookTitleValue);
  elementBookTitle.appendChild(textNodeTitle);

  let elementBookAuthor = document.createElement("h3");
  let bookAuthorValue = book.author;
  let textNodeAuthor = document.createTextNode(bookAuthorValue);
  elementBookAuthor.appendChild(textNodeAuthor);

  let elementBookImage = document.createElement("img");
  elementBookImage.src = book.image;

  let elementBookDescription = document.createElement("p");
  let bookDescriptionValue = book.description;
  let textNodeDescription = document.createTextNode(bookDescriptionValue);
  elementBookDescription.appendChild(textNodeDescription);

  card.append(elementBookTitle);
  card.append(elementBookAuthor);
  card.append(elementBookImage);
  card.append(elementBookDescription);
  grid.append(card);
};
