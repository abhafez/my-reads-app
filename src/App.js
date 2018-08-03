import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
// import SearchBooks from './components/SearchBooks';
// import FirstPage from './components/FirstPage';
import Book from './components/Book'
class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div>
        {this.state.books.map((book) => (
          <Book bookDetails={book} />
        ))}
      </div>
    )
  }
}

export default BooksApp
