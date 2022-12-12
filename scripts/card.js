import { grid, section } from "./variables.js";

//function to create a card for each book
export const createCard = (book) => {
  //create a container for the whole book info
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
  cardDesc.classList = "desc";

  //add text to description modal
  let elementBookDescription = document.createElement("p");
  elementBookDescription.appendChild(document.createTextNode(book.description));

  //create description modal close button
  const closeModalBtn = document.createElement("button");
  closeModalBtn.appendChild(document.createTextNode("Close Description"));
  closeModalBtn.classList = "close";

  //append description and close button to description modal
  cardDesc.append(elementBookDescription);
  cardDesc.append(closeModalBtn);
  section.append(cardDesc);

  //add button to open description modal
  let btnDesc = document.createElement("button");
  btnDesc.classList = "card__Btn";
  btnDesc.appendChild(document.createTextNode("Description"));

  //event to open description modal when DESCRIPTION button clicked // SHOULD EVENT BE HERE OR SOMEWHERE ELSE?
  btnDesc.addEventListener("click", () => {
    cardDesc.classList.add("desc--open");
  });

  //close description button when CLOSE button clicked // SHOULD EVENT BE HERE OR SOMEWHERE ELSE?
  closeModalBtn.addEventListener("click", () => {
    cardDesc.classList.remove("desc--open");
  });

  //add additional-info modal
  let cardInfo = document.createElement("div");
  cardInfo.classList = "info";

  //add data to information modal
  let publishDate = document.createElement("p");
  publishDate.appendChild(document.createTextNode(`Published Date: ${book.publishDate}`));
  let publisher = document.createElement("p");
  publisher.appendChild(document.createTextNode(`Publisher: ${book.publisher}`));
  let languages = document.createElement("p");
  languages.appendChild(document.createTextNode(`Languages: ${book.languages}`));

  //add button to open additional info modal
  let btnMoreInfo = document.createElement("button");
  btnMoreInfo.classList = "card__Btn";
  btnMoreInfo.appendChild(document.createTextNode("More Info"));

  //additional info modal close button
  const closeInfoModalBtn = document.createElement("button");
  closeInfoModalBtn.appendChild(document.createTextNode("Close Additional Info"))
  closeInfoModalBtn.classList = "close";

  //append data to additional-info card 
  cardInfo.append(publishDate, publisher, languages);
  cardInfo.append(closeInfoModalBtn);
  section.append(cardInfo);

  //event to open additional-info modal on click
  btnMoreInfo.addEventListener("click", () => {
    cardInfo.classList.add("info--open");
  });

   //event to close additional-info modal on click
  closeInfoModalBtn.addEventListener("click", () => {
    cardInfo.classList.remove("info--open");
  });

  //create a container for desc and more info buttons
  const btnContainer = document.createElement("div");
  btnContainer.append(btnDesc, btnMoreInfo);
  btnContainer.classList = "card__btnContainer";

     //create a container for a title and author
     let titleAndAuthorContainer = document.createElement("div");
     titleAndAuthorContainer.classList = "card__titleAndAuthorContainer";
     
    //add title and author to their container
    titleAndAuthorContainer.append(elementBookTitle);
    titleAndAuthorContainer.append(elementBookAuthor);
   
  card.append(
    titleAndAuthorContainer,
    elementBookImage,
    btnContainer,
  );
  grid.append(card);
};
