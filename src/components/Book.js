import React from 'react'
import * as BooksAPI from '../BooksAPI'
import $ from 'jquery'
class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.bookDetails.shelf,
      bookID: this.props.bookDetails.id,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value, bookID: this.props.bookDetails.id })
    this.props.page === 'main' ? $(`#${this.props.bookDetails.id}`).fadeOut("slow") : null
    BooksAPI.update(this.props.bookDetails, event.target.value)
  }

  render() {
    const sampleURL = `../icons/no-cover-book.png`
    return (
      <div className="book" id={this.props.bookDetails.id}>
        <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 192,
            backgroundImage:
              `url(${this.props.bookDetails.imageLinks ?
                this.props.bookDetails.imageLinks.smallThumbnail
                 : sampleURL})`
          }}></div>
          <div className="book-shelf-changer">
            <select value={this.state.value || 'none'} onChange={this.handleChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option id='' value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.bookDetails.title}</div>
        <div className="book-authors">{this.props.bookDetails.authors || "Unknown"}</div>
      </div>
    );
  }

}

export default Book;
