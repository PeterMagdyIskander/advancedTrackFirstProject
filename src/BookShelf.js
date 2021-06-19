import React from 'react'
import Book from "./Book"
class BookShelf extends React.Component{
    /*constructor(){
      super()
      this.state={
        allBooks:this.props.books
      }
    }
   */
     render(){
       return (
         <div className="bookshelf">
           <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
             <div className="bookshelf-books">
               <ol className="books-grid">
                 {
                 this.props.books.map((book)=>(
                   <li key={book.bookName}><Book OnAddTo={this.props.OnAddTo}  bookName={book.bookName} bookAuthor={book.bookAuthor} bookImage={book.bookImage} currentlyOn={this.props.shelfTitle}></Book> </li>
                   ))
                 }
               </ol>
             </div>
         </div>
       )
     }
   }
   export default BookShelf