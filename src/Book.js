import React from 'react'
class Book extends React.Component{
    
    constructor(props) {
      super(props);
      this.state = {
        selectValue: props.currentState// use this as default
      }
    }
    handleOnChange=(e)=> {
      this.setState({
        selectValue: e.target.value
      });

      if(this.props.bookInfo.shelf==null){
        this.props.updateBookState(this.props.bookInfo,e.target.value)
      
      }else{var str= this.props.bookInfo.shelf.charAt(0).toLowerCase() +this.props.bookInfo.shelf.slice(1);
        var res=str.split(" ");
        var newCurrentlyOn=res.join("");
        var areEqual = e.target.value.toUpperCase() === newCurrentlyOn.toUpperCase();
        if(!areEqual){
          this.props.updateBookState(this.props.bookInfo,e.target.value)
        }}

      
      e.preventDefault();
    }
    //OnAddTo={this.props.updateBookState}  bookName={book.title} bookAuthor={book.authors} bookImage={book.imageLinks.thumbnail} currentlyOn={book.shelf}
    render(){
      let bg="";
      try{
        bg=this.props.bookInfo.imageLinks.thumbnail
      }catch(error){
        console.log(error);
      }
      return(
        
        <div className="book">
        
          <div className="book-top">
            {
              
            }
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${bg})` }}></div>
              <div className="book-shelf-changer">
                <select value={this.state.selectValue} onChange={this.handleOnChange}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading" >Currently Reading</option>
                  <option value="wantToRead" >Want to Read</option>
                  <option value="read" >Read</option>
                  <option value="none">None</option>
                </select>
                </div>
              </div>
            <div className="book-title">{this.props.bookInfo.title}</div>
          <div className="book-authors">{this.props.bookInfo.authors}</div>
        </div>
      )
    }
  }
  
  
  export default Book