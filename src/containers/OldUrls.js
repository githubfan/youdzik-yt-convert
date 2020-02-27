import React from 'react';
import LocalUrl from '../hooks/useLocal';
import '../styles/old-urls.css'

export default function OldUrls () {

  return <div className="jumbotron">
    <h3 className="mb-20"><i className="fas fa-film"></i> Recent videos</h3>
    {LocalUrl.getUrls().length > 0 && <div className="vid-urls">
      {LocalUrl.getUrls().map((l, i) => <a href={l} key={'url' + i}>
        <img
          key={'url' + i}
          src={`https://i.ytimg.com/vi/${l.split('=')[1]}/0.jpg`}
          alt="youtube"
        />
      </a>)}
    </div>}
  </div>;
}