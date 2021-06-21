import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import {Link,Route,Switch} from 'react-router-dom'
import SearchForBooks from './search'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  updateBookState=(book,shelf)=>{
    BooksAPI.update(book,shelf).then()
    let obj=book;
    obj.shelf=shelf;
    this.setState((currentState)=>({
      books:currentState.books.filter((b)=>{return b!==book})
    }))
    this.setState((currentState)=>({books:[obj,...currentState.books]}))
  }
  render() {
    return (
      <div className="app">
      <Switch>
      <Route path='/' exact > 
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              <BookShelf shelfTitle="Currently Reading" updateBookState={this.updateBookState} books={this.state.books}></BookShelf>
              <BookShelf shelfTitle="Want to Read" updateBookState={this.updateBookState} books={this.state.books}></BookShelf>
              <BookShelf shelfTitle="Read" updateBookState={this.updateBookState}  books={this.state.books}></BookShelf>
              </div>
            </div>
            <Link to="/search" >
            
            <div className="open-search"><button>Add a book</button></div>
            </Link>
           
          </div>
      </Route>
      <Route path='/search' exact>
        <SearchForBooks updateBookState={this.updateBookState} books={this.state.books}></SearchForBooks>
      </Route>

      <Route path="/" render={()=> <div> 404</div>}/>
      </Switch>
      </div>
    )
  }
}
export default BooksApp
