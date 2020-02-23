import React, { useState } from 'react';
import './styles/style.css';
import './styles/util.css';
import YtConvert from './service/YtConvert';
import MediaObject from './components/MediaObject';
import Footer from './components/Footer';

function App () {

  const [streamInfo, setstreamInfo] = useState({});

  const [ytUrl, setYtUrl] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  const handleChange = (e) => {
    setYtUrl(e.target.value);
  }

  const ytToAudio = async () => {
    
    try {
      // get stream media infos
      const info = await YtConvert.getStreamInfo(ytUrl);

      setstreamInfo(info);
      setAudioUrl(YtConvert.downloadAudio(ytUrl));      
    } catch (error) {
      //console.log(error);
    }
  }

  const ytToVideo = async () => {
    
    try {
      // get stream media infos
      const info = await YtConvert.getStreamInfo(ytUrl);

      setstreamInfo(info);
      setAudioUrl(YtConvert.downloadVideo(ytUrl));      
    } catch (error) {
      //console.log(error);
    }
  }

  return <>
    <div className="jumbotron">

      <h2 className="m-0">YouTube MP3 converter</h2>
      <p className="fs-18 mt-0">Free and extremely fast</p>

      <div className="w-100">
        <input type="search" placeholder="https://www.youtube.com/watch?v=7Zl2AT5tTbI"
          onChange={handleChange}
          value={ytUrl}
          required
        />
        <div className="w-100 mb-20">
          <button className="mr-20" type="button" onClick={ytToAudio}>mp3</button>
          <button type="button" onClick={ytToVideo}>mp4</button>
        </div>
      </div>

      <div className="w-100">
        {
          streamInfo
          && Object.keys(streamInfo).length > 2
          && <MediaObject info={streamInfo} ytUrl={ytUrl} />
        }

        {audioUrl
          && audioUrl.length > 50
          && <a className="bg-green" href={audioUrl} download><i className="fas fa-download"></i> download</a>}
      </div>
    </div>

    <div className="jumbotron">
      <h3><i className="fab fa-empire"></i> Youdzik</h3>
      <p>Our website, which has Youtube Music download service, offers youtube converter service to the users. Copy the URL from the Youtube site, paste it into the search form, download the desired file as audio file (mp3) or video file (mp4)</p>      
    </div>

    <Footer />
  </>;
}

export default App;
