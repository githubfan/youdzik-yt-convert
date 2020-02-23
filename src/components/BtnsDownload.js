import React from 'react';

export default function BtnsDownload ({ audioServerUrl, videoServerUrl }) {
  return <div className="w-100 d-flex-end">

    <a className="btn-download bg-green mr-20" href={audioServerUrl} download>
      <i className="fas fa-download"></i> mp3
    </a>

    <a className="btn-download bg-green" href={videoServerUrl} download>
      <i className="fas fa-download"></i> mp4
    </a>

  </div>;
}