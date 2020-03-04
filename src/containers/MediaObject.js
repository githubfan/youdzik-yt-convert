import React, { useContext } from 'react';
import { YtContext } from '../provider/YtProvider';
import '../styles/MediaObject.css';

export default function MediaObject () {

  const { state } = useContext(YtContext);
  const { streamInfo } = state;

  return <>
    {Object.keys(state.streamInfo).length > 1
      && <>
        <h3 className="mt-3"><i className="fas fa-video"></i> Converted video</h3>

        <div className="media mb-5 mt-3">
          {streamInfo && streamInfo.video_stream_url
            ? <video controls name="media" className="vid-preview img-thumbnail mr-3 mb-3">
              <source src={streamInfo.video_stream_url} type="video/mp4" />
            </video>
            : <img src={`https://i.ytimg.com/vi/${state.ytUrl.split('=')[1]}/0.jpg`} 
            className="img-thumbnail h-50 mr-3 mb-3" alt="..." />}

          <div className="media-body">
            <h5 className="mt-0 mb-3">{streamInfo && streamInfo.title}</h5>

            <pre className="h-50 mb-3">{streamInfo.media && streamInfo.description}</pre>

            <div className="mt-3">
              <button className="btn btn-primary mr-2"><i className="fab fa-youtube"></i> {streamInfo.author && streamInfo.author.name}</button>
              <button className="btn btn-primary mr-2"><i className="fas fa-child"></i> {streamInfo.media && streamInfo.media.category}</button>

              <a className="btn btn-warning mr-2" href={state.audioServerUrl} download>
                <i className="fas fa-download"></i> mp3
            </a>

              <a className="btn btn-warning" href={state.videoServerUrl} download>
                <i className="fas fa-download"></i> mp4
            </a>
            </div>

          </div>

        </div>
      </>}
  </>;
}
