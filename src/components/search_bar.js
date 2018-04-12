import React,{Component} from 'react';
/* This is a functional component
const SearchBar=()=>{
  return <input />
};
*/

/*
ES6 Based class
*/
/*
Only class based components have state
*/
class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state={term:''};
  }
  render(){
    /*
    controller component as input value is changed by state
    */
    return <input
      value={this.state.term}
      onChange={event=>this.onInputChange(event.target.value)} />
    //changing state of component
      /*return (
        <div>
        <input onChange={event=>this.setState({'term':event.target.value})} />
        Value of term is {this.state.term}
        </div>
    );*/

    /*
    return <input onChange={event=>console.log(event.target.value)} />;
    */

    /*
      return <input onChange={this.onInputChange} />;
      */
  }

  onInputChange(term){
      this.setState({'term':event.target.value});
      this.props.onSearchTermChange(term);
  }
  /*
  onInputChange(event){
    console.log(event.target.value);
  }*/
}
export default SearchBar;
