import React from 'react'
import Book from './Book'

class Shelf extends React.Component {

  render() {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.booksOnShelf.map((book) => (
              <li draggable="true" key={book.id}>
                <Book bookDetails={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;