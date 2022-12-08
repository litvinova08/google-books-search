import { searchTerm, searchBtn } from "./variables.js";
import { notFoundModal } from "./cleanInput.js";
import { getBooks, renderGrid } from "./booksHandler.js";

//event listener to display books based on search results or nodal "books not found"
searchBtn.addEventListener("click", async () => {
  //on click -> grab search term
  const searchTermInput = searchTerm.value;
  if (searchTermInput.length === 0) {
    alert("enter data");
  } else {
    //fetch data -> get an array of books
    const booksArr = await getBooks(searchTermInput);
    //go through array -> book {}
    if (booksArr === undefined) {
      notFoundModal();
    } else {
      renderGrid(booksArr);
    }
  }
});
