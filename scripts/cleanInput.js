import { grid, notFound, searchTerm } from "./variables.js";

export const notFoundModal = () => {
  notFound.classList.add("not-found--open");
};

searchTerm.oninput = (e) => {
  if (!e.target.value) {
    notFound.classList.remove("not-found--open");
    grid.innerHTML = "";
  }
};
