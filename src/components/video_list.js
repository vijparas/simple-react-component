import React,{Component} from 'react';
import VideoListItem from './video_list_item';
const VideoList=(props)=>{
  // we are iterating the array of videos sent as properties using array maps
  const videosItems=props.videos.map((video)=>{
    // if we donot add key then react will throw an error that it wont be able to differentiate
    // Below we are creating a new VideoListComponent and are setting key and sending properties
      return <VideoListItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect}/>
  });
  return(
    <ul className="col-md-4 list-group">
      {videosItems}
    </ul>
  );
};

export default VideoList;
