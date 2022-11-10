import React, { Component } from "react";
import YouTube from "react-youtube";

// https://www.youtube.com/watch?v=-_pgcFQ0l64
// https://youtu.be/-_pgcFQ0l64
// https://www.youtube.com/watch?v=-_pgcFQ0l64&list=PLEsfXFp6DpzQbwYDx1zgcKJ4tzyWFaESK
class ReactYouTubeExample extends Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    console.log("video on ready");
    // event.target.playVideoAt(50); // 50 seconds
    const player = event.target;
    // this.setState({
    //   playerObj: player
    // });
    player.seekTo(50);
    player.playVideo();
    player.mute();
    console.log(event.target);
  }
  videoOnPlay(event) {
    // access to player in all event handlers via event.target
    // event.target.playVideoAt(50) // 50 seconds
    //const player = event.target;
    /// console.log(player.getCurrentTime())
  }
  videoStateChange(event) {
    //const player = event.target;
    //console.log(player.getCurrentTime());
  }

  componentWillUnmount() {
    //const { playerObj } = this.state;
    //console.log(player.getCurrentTime());
  }
  render() {
    const opts = {
      height: "330",
      width: "600",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        muted: 1
      }
    };
    const { videoId } = this.props;
    //const { videoId } = "2g811Eo7K8U";
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.videoOnReady}
        onPlay={this.videoOnPlay}
        onStateChange={this.videoStateChange}
      />
    );
  }
}

export default ReactYouTubeExample;
