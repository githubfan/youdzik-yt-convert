import React from 'react';
import '../styles/media-object.css';

export default function MediaObject ({ info, ytUrl }) {
  return (
    <div className="media-info w-100 mb-20">
      <img
        src={`https://i.ytimg.com/vi/${ytUrl.split('=')[1]}/0.jpg`}
        alt="youtube"
      />

      <div>
        <h4 className="m-0 mb-10"><i className="fas fa-info-circle"></i> Description:</h4>
        <p className="mt-0">{info && info.description}</p>

        <h4 className="m-0 mb-10"><i className="fas fa-user-tag"></i> Channel</h4>
        <p className="mt-0">{info.author && info.author.name}</p>

        <h4 className="m-0 mb-10"><i className="fas fa-bars"></i> Category:</h4>
        <p className="mt-0">{info.media && info.media.category}</p>
      </div>
    </div>
  )
}
