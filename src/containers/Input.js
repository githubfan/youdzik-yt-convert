import React, { useState, useContext } from 'react';
import {withRouter} from 'react-router-dom';
import { YtContext } from '../provider/YtProvider';
import YtConvert from '../service/YtConvert';
import LocalUrl from '../hooks/useLocal';
import '../styles/input.css';

function Input (props) {

  const [ytUrl, setYtUrl] = useState('');
  const { state, setState } = useContext(YtContext);

  const handleChange = (e) => {
    setState({ ...state, ytUrl: e.target.value });
    setYtUrl(e.target.value);
  }

  const ytToAudio = async (e) => {
    e.preventDefault();
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

        props.history.push("/media")


      } catch (err) {
        //console.log(error);
      }
    }
    else { setState({ ...state, error: 'Invalid url..' }); }
  }

  return <div className="input w-50" onSubmit={ytToAudio}>
    
    <form>
      <input type="text" placeholder="https://www.youtube.com/watch?v=7Zl2AT5tTbI"
        onChange={handleChange}
        value={ytUrl}
        required
      />
      <button type="submit" className="btn btn-warning btn-block"><i className="fas fa-search"></i> Search</button>
    </form>

    {state.error.length > 2 && <p className="color-red">{state.error}</p>}
  </div>;
}

export default withRouter(Input)