import React, { Component } from "react";
import SavedBookList from "../SavedBooksList";

class SavedBooks extends Component {
  render() {
    console.log("Props", this.props.savedBooks);
    return this.props.savedBooks.map((book) => (
      <SavedBookList
        key={book._id}
        id={book.id}
        title={book.title}
        link={book.link}
        authors={
          book.authors && book.authors.length > 1
            ? book.authors.join(", ")
            : book.authors
        }
        image={book.image ? book.image : "NO IMAGE AVAILABLE"}
        description={book.description}
        getBooks={this.props.getBooks}
      />
    ));
  }
}

export default SavedBooks;
