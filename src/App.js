import React, { useState } from 'react';
import './styles/bootstrap.css';
import YtConvert from './service/YtConvert';
import MediaObject from './components/MediaObject';

function App () {

  const [streamInfo, setstreamInfo] = useState({})
  const [ytUrl, setYtUrl] = useState("");
  const [urlResp, seturlResp] = useState()

  const handleChange = (e) => {
    setYtUrl(e.target.value);
  }

  const handleConvert = async () => {
    const player = new window.Audio();

    const info = await YtConvert.getStreamInfo(ytUrl);    

    setstreamInfo(info);

    const audioSream = await YtConvert.ytToMp3(ytUrl);

    player.src = window.URL.createObjectURL(new Blob([audioSream], { type: 'audio/mp3' }));
    let playPromise = player.play();


    if (playPromise !== undefined) {
      playPromise
        .then(_ => {
          // Automatic playback started!
          // Show playing UI.
          console.log("audio played auto");
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
          console.log(error);

          console.log("playback prevented");
        });
    }

    // const link = document.createElement('a');
    // link.href = url;
    // link.setAttribute('download', 'audio.mp3'); //or any other extension
    // document.body.appendChild(link);
    // link.click();

  }

  return (
    <main>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container"><span className="navbar-brand mb-0 h1">YOUDZIK</span></div>
      </nav>

      <div className="container mt-5">
        <h2 className="text-center w-50">YouTube MP3 converter to download videos easily, free and extremely fast</h2>

        <div className="input-group mt-3 mb-3">
          <input type="text" className="form-control"
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



        <MediaObject info={streamInfo} />

      </div>
    </main>
  );
}

export default App;
