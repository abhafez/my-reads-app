import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import AnimateOnChange from 'react-animate-on-change'

class SearchBooks extends React.Component {
  state = {
    query: '',
    searchResults: [],
    loading: true
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() , loading: true})
    BooksAPI.search(query, 20).then((books) => (
      this.setState({ searchResults: books , loading: false})
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
            {
              (this.state.loading) ? <p>Loading</p> :
              this.state.searchResults.map((book) => (
                <li>
                  <Book bookDetails={book} />
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;

