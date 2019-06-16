import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostCont from './components/PostContainer/PostCont';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instagramData: dummyData
    };
  }

  render () {
    return (
      <div className="App">
        <SearchBar />
        <PostCont instagramData={this.state.posts} />
      </div>
    )
  }
}

export default App;


