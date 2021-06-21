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
  currentShelf=(book)=>{
    try{
      let found=false;
    let index=0;
    for(let i = 0;this.props.books.length;i++){
      if(this.props.books[i].title===book.title)
      {
        found=true;
        index=i;
        break;
      }

    }
    if(found)
    {console.log("found and returning")
      return  this.props.books[index].shelf}
    else{console.log("not found and returning")
      return 'none'}
    }catch(error){
      console.log(error)
      return 'none';
    }
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
                    console.log(this.props.books)
                    console.log(book)
                    let shelf=this.currentShelf(book)
                  return <li key={book.id}><Book updateBookState={this.props.updateBookState} bookInfo={book} currentState={shelf}></Book> </li>
                }) 
                
              }
              
            </div>
          </div>
    )
  }
}

export default SearchForBooks