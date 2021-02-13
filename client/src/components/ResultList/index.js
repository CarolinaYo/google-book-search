import React, { Component } from "react";

class ResultList extends Component {
  render() {
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
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default ResultList;
