import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link} from 'react-router-dom'
import SearchBooks from './components/SearchBooks';
import Shelf from './components/Shelf'
import Icon from 'react-icons-kit';
import { book } from 'react-icons-kit/fa/book'

class BooksApp extends React.Component {
  state = {
    books: [],
    wantToRead: [],
    currentlyReading: [],
    read: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books,
        wantToRead: books.filter((book) => book.shelf === "wantToRead"),
        currentlyReading: books.filter((book) => book.shelf === "currentlyReading"),
        read: books.filter((book) => book.shelf === "read")
      })
    })
  }

  componentWillUpdate() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books,
        wantToRead: books.filter((book) => book.shelf === "wantToRead"),
        currentlyReading: books.filter((book) => book.shelf === "currentlyReading"),
        read: books.filter((book) => book.shelf === "read")
      })
    })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <div>
            <div className="list-books-content">
              <div className="list-books">
                <div className="list-books-title">
                  <h1><Icon icon={book} className='icon'/>MyReads</h1>
                </div>
                <Shelf shelf="Currently Reading" booksOnShelf={this.state.currentlyReading} />
                <Shelf shelf="Want to Read" booksOnShelf={this.state.wantToRead} />
                <Shelf shelf="Read" booksOnShelf={this.state.read} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )} />
        <Route path='/search' render={({history}) => (
          <SearchBooks />
        )} />
      </div>
    )
  }
}

export default BooksApp
