import React from 'react';
import Input from '../containers/Input';
import Nav from '../components/Nav';

export default function Home () {
  return <header>

    <Nav />

    <div className="jumbotron">

      <div className="w-50 text-center">
        <h2>YouTube converter</h2>
        <h5 className="text-center w-80 mx-auto">You can easily convert YouTube videos to mp3 (audio) or mp4 (video) files and download them for free.</h5>
      </div>

      <Input />

    </div>
  </header>;
}