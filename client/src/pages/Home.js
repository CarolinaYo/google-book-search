import React, { Component } from "react";
import { Container } from "../components/Grid/Grid";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Input, SubmitBtn } from "../components/Search/Search";
import API from "../utils/API";
import ResultList from "../components/ResultList/ResultList";

class Home extends Component {
  state = {
    books: [],
    search: "",
  };

  // Create function to search for books through Google API
  bookSearch = () => {
    API.getGoogleBooks(this.state.search)
      .then((res) => {
        console.log("This is res.data", res);
        // this.setState({
        //   books: res.data.items,
        //   search: "",
        });
      })
      .catch((err) => console.log(err));
  };

  // Create function to handle input data
//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };

  // Create function to handle form data submission
//   handleFormSubmit = (event) => {
//     event.preventDefault();
//     this.searchBooks();
//   };

  saveGoogleBook = (currentBook) => {
    console.log("This is the current book", currentBook);
    API.saveBook({
      id: currentBook.id,
      title: currentBook.title,
      authors: currentBook.authors,
      description: currentBook.description,
      image: currentBook.image,
      link: currentBook.link,
    })
      .then((res) => console.log("Successful POST to DB!", res))
      .catch((err) => console.log("this is the error", err));
  };

  render() {
    return (
      <div>
        <Navbar />
        <Container fluid>
          <Jumbotron />
          <form>
            <h5>Search for books</h5>
            <Input
              value={this.state.search}
              onChange={this.handleInputChange}
              name="search"
              placeholder="Cookbook for Nerds"
            />
            <SubmitBtn onClick={this.handleFormSubmit} />
          </form>
          <ResultList />
        </Container>
      </div>
    );
  }
}

export default Home;
