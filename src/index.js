import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
// Create a new component which create some html
const API_KEY='AIzaSyApPb_M4Hjcqo_fA2vHeCQVzdCEYkQOmcU';
class App extends Component{
  constructor(props){
    super(props);
    this.state= {
      videos: [],
      selectedVideo:null
    } ;
    /*YTSearch({key:API_KEY,term:'india'},(data)=>{
      this.setState({videos:data});*/
      this.videoSearch('india')
  }
  videoSearch(term){
      YTSearch({key:API_KEY,term:term},(videos)=>{
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });

    });
  }
  render(){
    const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);
    return (
        <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        // Below we are calling VideoList Component with vidoes properties

        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo=>this.setState({selectedVideo})} videos={this.state.videos} />

    </div>
  )};
}
//Take this component generated and put it in DOM
ReactDOM.render(<App />,document.querySelector('.container'));


// Functional Component

/*
const App=()=>{
  return (
      <div>
      <SearchBar />
  </div>
);
}*/
