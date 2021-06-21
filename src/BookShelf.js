import React from 'react'
import Book from "./Book"
class BookShelf extends React.Component{
    
     render(){
       return (
         <div className="bookshelf">
           <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
             <div className="bookshelf-books">
               <ol className="books-grid">
                 {
                 this.props.books.map((book)=>
                   { var str=this.props.shelfTitle;
                      str= this.props.shelfTitle.charAt(0).toLowerCase() +this.props.shelfTitle.slice(1);
                        var res=str.split(" ");
                      var newCurrentlyOn=res.join("");
                      let comparison=book.shelf;
                      var areEqual = comparison.toUpperCase() === newCurrentlyOn.toUpperCase();
                     if(areEqual){
                    return <li key={book.id}><Book updateBookState={this.props.updateBookState} bookInfo={book} currentState={book.shelf}></Book> </li>
                   }
                   return null}
                   )
                 }
               </ol>
             </div>
         </div>
       )
     }
   }
   export default BookShelf