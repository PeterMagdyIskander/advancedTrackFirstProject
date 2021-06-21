import React, {Component} from 'react'
import {Link}from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'


class SearchForBooks extends Component{
  state={
    query:"",
    searchedBooks:[]
  }

  searchQuery=(query)=>{
    BooksAPI.search(query).then(value=>{
      
      this.setState(()=>({query:query,searchedBooks:value}))
    })
 
  }
  render(){
    const matchingBooks= this.state.query==="" || this.state.searchedBooks.error==="empty query"
    ? []
    : this.state.searchedBooks
    return(
      
      <div className="search-books">
      
            <div className="search-books-bar">
            
              <Link to='/' className="close-search"></Link>
              <div className="search-books-input-wrapper">
                
                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event)=>this.searchQuery(event.target.value)}/>

              </div>
            </div>
            <div className="search-books-results">
            
              <ol className="books-grid"></ol>
              {
                
                  matchingBooks.map((book)=>{
                  
                  return <li key={book.id}><Book updateBookState={this.props.updateBookState} bookInfo={book} currentState={'none'}></Book> </li>
                }) 
                
              }
              
            </div>
          </div>
    )
  }
}

export default SearchForBooks