import React from 'react';
import MediaObject from './containers/MediaObject';
import Footer from './components/Footer';
import Input from './containers/Input';
import './styles/style.css';
import './styles/util.css';
import './styles/scroll.css';
import OldUrls from './containers/OldUrls';

export default function App () {

  return <>
    <header><h1><i className="fas fa-dice-d20"></i> Youdzik</h1></header>

    <section className="d-flex">

      <div>
        <h2 className="m-0">YouTube converter</h2>
        <h5 className="fs-18 mt-0">Free and extremely fast <i className="fas fa-tachometer-alt"></i></h5>
      </div>

      <Input />

    </section>
    
    <MediaObject />

    <OldUrls />

    <div className="jumbotron">
      <h3><i className="fab fa-empire"></i> Youdzik</h3>
      <p>Our website, offers youtube converter service to the users.By using our converter you can easily convert YouTube videos to mp3 (audio) or mp4 (video) files and download them for free - this service works for computers, tablets and mobile devices.</p>
      <p>To convert a video, copy the YouTube video URL into our converter, choose a format and click the convert button. As soon as the conversion is finished you can download the file by clicking on the download button.</p>
      <p className="w-100">Enjoy! We hope you like our service.</p>
    </div>

    <Footer />
  </>;
}
