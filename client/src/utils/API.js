import axios from "axios";

export default {
  // Gets all books
  getGoogleBooks: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  },
  // Get saved books
  getSavedBooks: function () {
    return axios.get("/api/books/");
  },

  //Get book by id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },

  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
    // return axios.delete("/api/books", { params: { id: id } });
  },
};
