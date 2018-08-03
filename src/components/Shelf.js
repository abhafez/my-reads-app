import React from 'react'
import Book from './Book'

class Shelf extends React.Component {

  render() {
    function allowDrop(ev) {
      ev.preventDefault();
    }

    function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    }

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.booksOnShelf.map((book) => (
              <li draggable="true" ondragstart="drag(event)" key={book.id}>
                <Book  bookDetails={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;