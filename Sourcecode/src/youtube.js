import React, { useState, useEffect } from "react";
import Video from "./Video";


class Videos extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
    };
  }
  async componentDidMount() {
    const url =
      "https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC19OYOBqkgVqgTIQxbsPdlw&maxResults=25&key=AIzaSyCEZKpZvsK3aHAUzfJatr8Uyd75yOEbHpI";
      
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ videos: data.items });
    console.log(data.items);
  }





  render() {
    const { videos } = this.state;
    
    const renderVideos = videos.map((video) => {
      return <Video key={video.contentDetails.videoId} video={video} />;

      
      
    });
    return <div>{renderVideos}</div>;


  }
}

export default Videos;
