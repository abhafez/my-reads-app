import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks';
import Book from './components/Book'
import Shelf from './components/Shelf'
class BooksApp extends React.Component {
  state = {
    books: [],
    wtr: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books,
      })
    })
  }





  render() {
    console.log(this.state.wtr);
    console.log(this.state.books);
    return (
      <div>
        <div className="list-books-content">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <Shelf shelf="Currently Reading" />
            <Shelf shelf="Want to Read" />
            <Shelf shelf="Read" />
            <ol>
              {this.state.books.map((book) => (
                <li key={book.id}>
                  <Book bookDetails={book} />
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          {/* edit: previous line */}
        </div>
      </div>
    )
  }
}

export default BooksApp
