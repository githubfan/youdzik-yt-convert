import React from 'react';
import LocalUrl from '../hooks/useLocal';

export default function OldUrls () {

  return <>
    <h3 className="mt-5"><i className="fas fa-film"></i> Recent videos</h3>
    {LocalUrl.getUrls().length > 0 && <div className="row mb-5">
      {LocalUrl.getUrls().map((l, i) => <div className="col-md-3 mb-3" key={'url' + i}>
        <a href={l}>
          <img
            key={'url' + i}
            src={`https://i.ytimg.com/vi/${l.split('=')[1]}/0.jpg`}
            alt="youtube"
            className="w-100 img-thumbnail"
          />
        </a>
      </div>)}
    </div>}
  </>;
}