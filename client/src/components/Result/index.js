import React, { Component } from "react";
import ResultList from "../ResultList";

class Result extends Component {
  render() {
    console.log("Props", this.props.searchResult);
    return this.props.searchResult.map((book) => (
      <ResultList
        key={book.id}
        id={book.id}
        title={book.volumeInfo.title}
        link={book.volumeInfo.previewLink}
        authors={
          book.volumeInfo.authors && book.volumeInfo.authors.length > 1
            ? book.volumeInfo.authors.join(", ")
            : book.volumeInfo.authors
        }
        image={
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : "NO IMAGE AVAILABLE"
        }
        description={book.volumeInfo.description}
      />
    ));
  }
}

export default Result;
