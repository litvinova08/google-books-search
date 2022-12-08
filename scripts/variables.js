const GOOGLE_URL = "https://www.googleapis.com/books/v1/volumes?q=";

let section = document.querySelector(".section");

const searchTerm = document.querySelector("#searchTerm");

const searchBtn = document.querySelector(".section__search");

const grid = document.querySelector(".section__grid");

const notFound = document.querySelector(".not-found");

export { GOOGLE_URL, searchTerm, searchBtn, grid, notFound, section };
