import React from 'react'
import Book from './Book'

const Shelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.booksOnShelf.map((book) => (
            <li draggable="true" key={book.id}>
              <Book bookDetails={book} page={'main'} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Shelf;