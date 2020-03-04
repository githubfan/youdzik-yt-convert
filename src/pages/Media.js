import React from 'react';
import Nav from '../components/Nav';
import MediaObject from '../containers/MediaObject';
import OldUrls from '../containers/OldUrls';
import Footer from '../components/Footer';

export default function Media () {
  return <>
    <Nav />

    <div className="container mb-5">

      <MediaObject />

      <OldUrls />

      <h3 className="mt-3"><i className="fas fa-info-circle"></i> About</h3>
      <p>Our website, offers youtube converter service to the users.By using our converter you can easily convert YouTube videos to mp3 (audio) or mp4 (video) files and download them for free - this service works for computers, tablets and mobile devices.</p>
      <p>To convert a video, copy the YouTube video URL into our converter. As soon as the conversion is finished you can download the file by clicking on the download button.</p>
      <p>Enjoy! We hope you like our service.</p>
    </div>

    <Footer />
  </>;
}
