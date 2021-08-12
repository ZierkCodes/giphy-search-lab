import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {  
    baseURL: 'https://api.giphy.com/v1/gifs/search?',
    apikey: 'api_key=' + process.env.REACT_APP_API_KEY,
    query: '&q=',
    gifName: '',
    searchURL: '',
    gif: [],
  }
handleSubmit = (event) => {
  event.preventDefault()
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${event.target.gifName.value}`

  fetch(url)
  .then( res =>  res.json())
  .then(data => {
    this.setState({
      gif: data.data
    })
  })
  this.setState({
    searchURL: url
  })
}
  render() { 
    return ( 
<>
<form onSubmit={this.handleSubmit}>
          <label htmlFor='gifName'>Search: </label>
          <input
            id='gifName'
            type='text'
            // onChange={this.handleChange}
          />
          <input
            type='submit'
            value='Search a Gif'
          />
        </form>
        {this.state.gif.map((gif, idx) => {
          return(
            <div>
              <img src={gif.images.original.url} key={idx} alt={gif.gifName} />
            </div>
          )
        })}
</>
     );
  }
}
export default App;
