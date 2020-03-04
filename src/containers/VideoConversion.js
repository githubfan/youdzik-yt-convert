import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { YtContext } from '../provider/YtProvider';
import YtConvert from '../service/YtConvert';
import LocalUrl from '../util/LocalUrl';
import '../styles/VideoConversion.css';
import Spinner from '../components/Spinner';

function VideoConversion (props) {

  const { state, setState } = useContext(YtContext);
  const [ytUrl, setYtUrl] = useState(state.ytUrl);
  const [isRunning, setIsRunning] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, ytUrl: e.target.value });
    setYtUrl(e.target.value);
  }

  const convertVideo = async (e) => {
    setIsRunning(true);
    e.preventDefault();

    if (ytUrl.startsWith('https://www.youtube.com/watch?v=') && YtConvert.validUrl(ytUrl)) {
      try {
        const info = await YtConvert.getStreamInfo(ytUrl);

        setState({
          ...state,
          streamInfo: info,
          audioServerUrl: YtConvert.downloadAudio(ytUrl),
          videoServerUrl: YtConvert.downloadVideo(ytUrl),
          error: ''
        });

        LocalUrl.saveUrl(ytUrl);
        setYtUrl('');

        setTimeout(() => {
          setIsRunning(false);
          props.history.push("/media");
        }, 1500);

      } catch (err) {
        //console.log(error);
      }
    }    
    else { 
      setIsRunning(false);
      setState({ ...state, error: 'Invalid url..' });       
    }
  }

  return <div className="input w-50">

    <form onSubmit={convertVideo} className="mb-3">
      <input type="text" placeholder="https://www.youtube.com/watch?v=7Zl2AT5tTbI"
        onChange={handleChange}
        value={ytUrl}
        autoComplete="true"
        required
      />
      <button type="submit" className="btn btn-warning btn-block">
        <i className="fas fa-search"></i> Search
      </button>
    </form>


    {state.error.length > 2 && <div className="alert alert-danger" role="alert">
      <i className="fas fa-info"></i> {state.error}
    </div>}

    {isRunning  && <Spinner />}

  </div>;
}

export default withRouter(VideoConversion)