import React, { useContext } from 'react';
import { YtContext } from '../provider/YtProvider';
import BtnsDownload from '../components/BtnsDownload';
import '../styles/media-object.css';

export default function MediaObject () {

  const { state } = useContext(YtContext);
  const { streamInfo } = state;

  return <>{Object.keys(state.streamInfo).length > 1 && <div className="media-info w-100">
    
    <div>
      <img
        src={`https://i.ytimg.com/vi/${state.ytUrl.split('=')[1]}/0.jpg`}
        alt="youtube"
      />
      <BtnsDownload audioServerUrl={state.audioServerUrl} videoServerUrl={state.videoServerUrl} />
    </div>

    <div className="border-left">
      <h4 className="m-0 mb-10">Title:</h4>
      <p className="mt-0">{streamInfo && streamInfo.title}</p>

      <h4 className="m-0 mb-10">Description:</h4>
      <p className="mt-0">{streamInfo && streamInfo.description}</p>

      <h4 className="m-0 mb-10">Channel:</h4>
      <p className="mt-0">{streamInfo.author && streamInfo.author.name}</p>

      <h4 className="m-0 mb-10">Category:</h4>
      <p className="mt-0">{streamInfo.media && streamInfo.media.category}</p>
    </div>

  </div>}
  </>;
}
