import React, { useState } from 'react';
import './styles/style.css';
import './styles/util.css';
import YtConvert from './service/YtConvert';
import MediaObject from './components/MediaObject';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';

export default function App () {

  const [streamInfo, setstreamInfo] = useState({});

  const [ytUrl, setYtUrl] = useState('');
  const [erorr, setError] = useState();

  const [serverUrl, setServerUrl] = useState('');

  const handleChange = (e) => {
    setstreamInfo('');
    setServerUrl('');
    setYtUrl(e.target.value);
  }

  const ytToAudio = async () => {
    if (ytUrl.startsWith('https://www.youtube.com/watch?v=')) {
      try {
        const info = await YtConvert.getStreamInfo(ytUrl);

        setstreamInfo(info);
        setServerUrl(YtConvert.downloadAudio(ytUrl));
        setError('')
      } catch (error) {
        //console.log(error);
      }
    }
    else setError('Invalid url..');
  }

  const ytToVideo = async () => {
    if (ytUrl.startsWith('https://www.youtube.com/watch?v=')) {
      try {
        const info = await YtConvert.getStreamInfo(ytUrl);

        setstreamInfo(info);
        setServerUrl(YtConvert.downloadVideo(ytUrl));
        setError('')
      } catch (error) {
        //console.log(error);
      }
    } else setError('Invalid url..');
  }

  return <>
    <div className="jumbotron">

      <h2 className="m-0">YouTube converter</h2>
      <p className="fs-18 mt-0">Free and extremely fast</p>

      <div className="w-100">
        <input type="search" placeholder="https://www.youtube.com/watch?v=7Zl2AT5tTbI"
          onChange={handleChange}
          value={ytUrl}
          required
        />
        <div className="w-100 mb-20">
          <button className="mr-20" type="button" onClick={ytToAudio}>mp3</button>
          <button type="button" onClick={ytToVideo}> mp4</button>
        </div>

        <p className="color-red">{erorr}</p>
        {serverUrl && <ProgressBar />}
      </div>

      <div className="w-100">
        {
          streamInfo
          && Object.keys(streamInfo).length > 2
          && <MediaObject info={streamInfo} ytUrl={ytUrl} />
        }

        {serverUrl
          && serverUrl.length > 50
          && <a className="btn-download bg-green" href={serverUrl} download>
            <i className="fas fa-download"></i> download
          </a>}
      </div>
    </div>

    <div className="jumbotron">
      <h3><i className="fab fa-empire"></i> Youdzik</h3>
      <p>Our website, offers youtube converter service to the users. Copy the URL from the Youtube site, paste it into the search form, download the desired file as audio file (mp3) or video file (mp4).</p>
    </div>

    <Footer />
  </>;
}
