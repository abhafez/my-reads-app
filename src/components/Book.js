import React from 'react'



class Book extends React.Component {
  state = {
    currentShelf: this.props.bookDetails.shelf,
    newShelf: ''
  }
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192,
            backgroundImage: `url(${this.props.bookDetails.imageLinks.smallThumbnail})`}}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option id='currentlyReading' value="currentlyReading">Currently Reading</option>
              <option id='wantToRead' value="wantToRead">Want to Read</option>
              <option id='read' value="read">Read</option>
              {/* <option id='' value="none">None</option> */}
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
