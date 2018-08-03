import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks';
import FirstPage from './components/FirstPage';

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
        <FirstPage />
      )
  }
}

export default BooksApp
