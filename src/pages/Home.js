import React from 'react';
import VideoConversion from '../containers/VideoConversion';
import Nav from '../components/Nav';
import vid from '../img/video2.mp4'

export default function Home () {
  return <header>

    <Nav />

    <video autoPlay muted loop id="myVideo">
      <source src={vid} type="video/mp4" />
    </video>

    <div className="jumbotron">

      <div className="w-50 text-center">
        <h2>YouTube converter</h2>
        <h5 className="text-center w-80 mx-auto">You can easily convert YouTube videos to mp3 (audio) or mp4 (video) files and download them for free.</h5>
      </div>

      <VideoConversion />

    </div>
  </header>;
}