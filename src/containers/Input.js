import React, { useState, useContext } from 'react';
import { YtContext } from '../provider/YtProvider';
import YtConvert from '../service/YtConvert';
import LocalUrl from '../hooks/useLocal';

export default function Input () {

  const [ytUrl, setYtUrl] = useState('');
  const { state, setState } = useContext(YtContext);

  const handleChange = (e) => {
    setState({ ...state, ytUrl: e.target.value });
    setYtUrl(e.target.value);
  }

  const ytToAudio = async () => {
    if (state.ytUrl.startsWith('https://www.youtube.com/watch?v=')) {
      try {
        const info = await YtConvert.getStreamInfo(state.ytUrl);

        setState({
          ...state,
          streamInfo: info,
          audioServerUrl: YtConvert.downloadAudio(state.ytUrl),
          videoServerUrl: YtConvert.downloadVideo(state.ytUrl),
          error: ''
        });
        LocalUrl.saveUrl(state.ytUrl);
        setYtUrl('');
      } catch (err) {
        //console.log(error);
      }
    }
    else { setState({ ...state, error: 'Invalid url..' }); }
  }

  return <div className="w-100">
    <div className="input">
      <input type="text" placeholder="https://www.youtube.com/watch?v=7Zl2AT5tTbI"
        onChange={handleChange}
        value={ytUrl}
        required
      />
      <i className="fas fa-search" onClick={ytToAudio}></i>
    </div>

    {state.error.length > 2 && <p className="color-red">{state.error}</p>}   
  </div>;
}