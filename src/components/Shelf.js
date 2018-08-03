import React from 'react'

class Shelf extends React.Component {
  state = {

  }

  render() {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {/* {TODO: add books belong to this shelf} */}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;