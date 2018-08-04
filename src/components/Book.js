import React from 'react'
import * as BooksAPI from '../BooksAPI'
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.bookDetails.shelf,
      bookID: this.props.bookDetails.id
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value, bookID: this.props.bookDetails.id});
    BooksAPI.update(this.props.bookDetails, event.target.value)
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128, height: 192,
            backgroundImage:
            `url(${this.props.bookDetails.imageLinks.smallThumbnail})`
          }}></div>
          <div className="book-shelf-changer">
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option id='' value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.bookDetails.title}</div>
        <div className="book-authors">{this.props.bookDetails.authors}</div>
      </div>
    );
  }
}

export default Book;
