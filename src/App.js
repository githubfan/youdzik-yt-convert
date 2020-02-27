import React from 'react';
import MediaObject from './containers/MediaObject';
import Footer from './components/Footer';
import Input from './containers/Input';
import './styles/style.css';
import './styles/util.css';
import OldUrls from './containers/OldUrls';

export default function App () {

  return <>
    <div className="jumbotron">

      <h2 className="m-0">YouTube converter</h2>
      <p className="fs-18 mt-0">Free and extremely fast</p>

      <Input />

      <MediaObject />
    </div>

    <OldUrls />

    <div className="jumbotron">
      <h3><i className="fab fa-empire"></i> Youdzik</h3>
      <p>Our website, offers youtube converter service to the users. Copy the URL from the Youtube site, paste it into the search form, download the desired file as audio file (mp3) or video file (mp4).</p>
    </div>    

    <Footer />
  </>;
}
