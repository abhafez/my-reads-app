import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchResults: []
    }
    this.updateQuery = this.updateQuery.bind(this);
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    BooksAPI.search(this.state.query).then((books) => (
      this.setState({ searchResults: books })
    ))
  }

  render() {

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {/* {foundBooks.map((book) => (
              <li draggable="true" key={book.id}>
                <Book bookDetails={book} />
              </li>
            ))} */}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;

