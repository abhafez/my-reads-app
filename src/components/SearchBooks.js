import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      match: false,
      searchResults: [],
      loading: true,
      isMounted: false,
      loadingMsg: `Loading ...`
    };
  }

  updateQuery = (query) => {
    let validSearch = ['Android', 'Art',
      'Artificial Intelligence', 'Astronomy',
      'Austen', 'Baseball', 'Basketball', 'Bhagat',
      'Biography', 'Brief', 'Business', 'Camus',
      'Cervantes', 'Christie', 'Classics', 'Comics',
      'Cook', 'Cricket', 'Cycling', 'Desai', 'Design',
      'Development', 'Digital Marketing', 'Drama', 'Drawing',
      'Dumas', 'Education', 'Everything', 'Fantasy', 'Film',
      'Finance', 'First', 'Fitness', 'Football', 'Future',
      'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen',
      'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn',
      'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money',
      'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography',
      'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River',
      'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare',
      'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel',
      'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
    ]
    let found = validSearch.filter((term) =>
      term.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )
    console.log(found);
    this.setState({
      query: query,
      loading: true,
      loadingMsg: `Loading ...`,
      userBooks: []
    })


    if (found.length > 0 && this.state.isMounted === false) {
      // this.setState({ isMounted: true })
      BooksAPI.search(query, 20).then((books) => (
        this.setState({ searchResults: books, loading: false })
      ))
    } else {
      this.setState({ loadingMsg: `No book or author with this name` })
    }
  }

  getShelf = (book) => {
    let idShelfPair = this.props.userBooks.map((userBook) => [userBook.id, userBook.shelf])
    for (let i = 0; i < idShelfPair.length; i++) {
      const element = idShelfPair[i]
      if (element[0] === book.id) {
        return element[1]
      }
    }
    return 'none'
  }

  componentDidMount() {
    this.setState({ userBooks: this.props.userBooks.map((book) => [book.id, book.shelf]) })
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
              (this.state.loading) ?
                <p className='search-area'>
                  {this.state.loadingMsg}</p> :
                this.state.searchResults.map((book) => (
                  <li key={book.id}>
                    <Book theShelf={this.getShelf(book)}
                     bookDetails={book}
                    />
                  </li>
                ))
                // this.props.userBooks[0].id === book.id ?
                //      this.props.userBooks[0].id : 'none'
            }
          </ol>
        </div>
      </div>
    );
  }

}

export default SearchBooks;