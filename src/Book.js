import React from 'react'
class Book extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        selectValue: 'none' // use this as default
      }
    }
    handleOnChange=(e)=> {
      console.log(e.target.value)
      this.setState({
        selectValue: e.target.value
      });
      this.props.OnAddTo(this.state.selectValue,this.props.bookName,this.props.bookAuthor,this.props.bookImage,this.props.currentlyOn)
      e.preventDefault();
    }
  
    render(){
      return(
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.props.bookImage }}></div>
              <div className="book-shelf-changer">
                <select  onChange={this.handleOnChange}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading" >Currently Reading</option>
                  <option value="wantToRead" >Want to Read</option>
                  <option value="read" >Read</option>
                  <option value="none">None</option>
                </select>
                </div>
              </div>
            <div className="book-title">{this.props.bookName}</div>
          <div className="book-authors">{this.props.bookAuthor}</div>
        </div>
      )
    }
  }
  
  
  export default Book