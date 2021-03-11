import React, { Component } from "react";
import API from "../../utils/API";

class SavedBookList extends Component {
  handleDelete() {
    console.log("console for handleDelete:", this.props);
    API.deleteBook(this.props.id).then((res) => {
      console.log("res: ", res);
      this.props.getBooks();
    });
  }

  render() {
    // console.log("finding author: ", this.props);
    return (
      <div className="list-overflow-container">
        <ul className="list-group">
          <li className="list-group-item">
            <div className="card">
              <div className="card-body">
                <img
                  src={this.props.image}
                  style={{ maxWidth: "100px" }}
                  alt="book"
                />
                <h5 className="card-title" style={{ margin: "10px 0" }}>
                  {this.props.title}
                </h5>
                <p className="card-text">{this.props.description}</p>
                <p style={{ fontStyle: "italic" }}>
                  Author(s): {this.props.authors}
                </p>
                <a
                  href={this.props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ marginRight: "6px" }}
                >
                  View Book
                </a>
                <button
                  className="btn btn-warning"
                  onClick={this.handleDelete.bind(this)}
                  style={{ marginRight: "6px" }}
                >
                  Delete Book
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default SavedBookList;
