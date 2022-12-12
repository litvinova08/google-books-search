import { grid, notFound, searchTerm } from "./variables.js";

//function to display a modal with not found message if no books found
export const notFoundModal = () => {
  notFound.classList.add("not-found--open");
};

//function to remove all card when the user deletes search input & unred the search bar
searchTerm.oninput = (e) => {
  searchTerm.classList.remove("section__input--empty");
  if (!e.target.value) {
    notFound.classList.remove("not-found--open");
    grid.innerHTML = "";
  }
};

//function to make search bar border red if no input entered
export const  requestInput = () => {
  searchTerm.classList.add("section__input--empty");
}
