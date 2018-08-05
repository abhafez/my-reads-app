import React from 'react'
import Book from './Book'

class SearchResults extends Component {
  state = {}
  render() {
    return (
      this.props.searchResults.map((book) => (
        <li draggable="true" key={book.id}>
          <Book bookDetails={book} />
        </li>
      ))
    );
  }
}

export default SearchResults;