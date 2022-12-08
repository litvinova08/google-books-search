import { grid, section } from "./variables.js";

//function to create a card for each book
export const createCard = (book) => {
  //create a container
  let card = document.createElement("div");
  card.classList = "card";

  //add a title
  let elementBookTitle = document.createElement("h2");
  elementBookTitle.appendChild(document.createTextNode(book.title));
  elementBookTitle.classList = "card__book-title";

  //add an author
  let elementBookAuthor = document.createElement("h3");
  elementBookAuthor.appendChild(document.createTextNode(book.author));
  elementBookAuthor.classList = "card__book-author";

  //add an image
  let elementBookImage = document.createElement("img");
  elementBookImage.src = book.image;
  elementBookImage.classList = "card__book-image";

  //add description modal
  let cardDesc = document.createElement("div");
  cardDesc.classList = "card__btn-desc";

  //add text to description modal
  let elementBookDescription = document.createElement("p");
  elementBookDescription.appendChild(document.createTextNode(book.description));

  //description modal close button
  const closeModalBtn = document.createElement("button");
  closeModalBtn.classList = "close";

  cardDesc.append(elementBookDescription);
  cardDesc.append(closeModalBtn);
  section.append(cardDesc);

  //add button to open description modal
  let btnDesc = document.createElement("button");
  btnDesc.appendChild(document.createTextNode("Description"));

  //open description modal when DESCRIPTION button clicked
  btnDesc.addEventListener("click", () => {
    cardDesc.classList.add("card__btn-desc--open");
  });

  //close description button when CLOSE button clicked
  closeModalBtn.addEventListener("click", () => {
    cardDesc.classList.remove("card__btn-desc--open");
  });

  //add additional info modal
  let cardInfo = document.createElement("div");
  cardInfo.classList = "extraInfo";
  //add data to information modal
  let publishDate = document.createElement("p");
  publishDate.appendChild(document.createTextNode(book.publishDate));
  let publisher = document.createElement("p");
  publisher.appendChild(document.createTextNode(book.publisher));
  let languages = document.createElement("p");
  languages.appendChild(document.createTextNode(book.languages));
  //add button to open additional info modal
  let btnMoreInfo = document.createElement("button");
  btnMoreInfo.appendChild(document.createTextNode("More Info"));

  //additional info modal close button
  const closeInfoModalBtn = document.createElement("button");
  closeInfoModalBtn.classList = "close";

  cardInfo.append(publishDate, publisher, languages);
  cardInfo.append(closeInfoModalBtn);
  section.append(cardInfo);

  btnMoreInfo.addEventListener("click", () => {
    cardInfo.classList.add("extraInfo--open");
  });

  closeInfoModalBtn.addEventListener("click", () => {
    cardInfo.classList.remove("extraInfo--open");
  });

  const btnContainer = document.createElement("div");
  btnContainer.append(btnDesc, btnMoreInfo);
  btnContainer.classList = "card__btnContainer";

  card.append(
    elementBookTitle,
    elementBookAuthor,
    elementBookImage,
    btnContainer
  );
  grid.append(card);
};
