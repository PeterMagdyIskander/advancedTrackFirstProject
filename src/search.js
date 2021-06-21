import React, {Component} from 'react'
import {Link}from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
class SearchForBooks extends Component{
  state={
    query:"",
    searchedBooks:[]
  }

  searchQuery=(query)=>{
    BooksAPI.search(query).then(value=>{
      
      this.setState(()=>({searchedBooks:value,query:query}))
    })
 
  }
  render(){
    const matchingBooks= this.state.query===""
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
                matchingBooks.map((b)=>{
                  return <li  key={b.id}>{b.title}</li>
                }) 
              }
            </div>
          </div>
    )
  }
}

export default SearchForBooks