import React, { useState } from 'react';
import './styles/bootstrap.css';
import YtConvert from './service/YtConvert';
import MediaObject from './components/MediaObject';

function App () {

  const [streamInfo, setstreamInfo] = useState({})
  const [ytUrl, setYtUrl] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  const handleChange = (e) => {
    setYtUrl(e.target.value);
  }

  const handleConvert = async () => {
    try {
      // get stream media infos
      const info = await YtConvert.getStreamInfo(ytUrl);
      setstreamInfo(info);
      setAudioUrl(YtConvert.redirectServer(ytUrl));

    } catch (error) {
      //console.log(error);
    }
  }

  return (
    <main>
      <nav className="navbar navbar-light bg-light">
        <div className="container"><span className="navbar-brand mb-0 h1">YOUDZIK</span></div>
      </nav>

      <div class="jumbotron">
      <div className="container mt-5">
        <h2 className="w-50 mx-auto mb-5">YouTube MP3 converter to download videos easily, free and extremely fast</h2>

        <div className="input-group mt-3 mb-3 w-75 mx-auto">
          <input type="text" className="form-control form-control-lg"
            placeholder="https://www.youtube.com/watch?v=7Zl2AT5tTbI"
            aria-describedby="button-addon4"
            onChange={handleChange}
            value={ytUrl}
            required
          />
          <div className="input-group-append" id="button-addon4">
            <button className="btn btn-outline-secondary"
              type="button"
              onClick={handleConvert}>mp3</button>

            <button className="btn btn-outline-secondary" type="button">mp4</button>
          </div>
        </div>

        <div className="w-75 mx-auto">
        {audioUrl
          && audioUrl.length > 50
          && <a className="btn btn-success w-100 mb-3 btn-lg" href={audioUrl} download>download</a>}
        </div>

        {streamInfo && Object.keys(streamInfo).length > 2 
        && <MediaObject info={streamInfo} ytUrl={ytUrl} />}
        
      </div>
    
    </div>
    </main>
  );
}

export default App;
