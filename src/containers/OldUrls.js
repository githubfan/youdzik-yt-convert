import React, { useState } from 'react';
import LocalUrl from '../util/LocalUrl';
import '../styles/OldUrls.css';

export default function OldUrls () {

  const [oldUrls, setOldUrls] = useState(LocalUrl.getUrls());

  const removeUrl = (url) => {
    let newUrls = LocalUrl.removeOne(url);
    setOldUrls(newUrls);
  }

  return <>
    {oldUrls.length > 0
      && <><h3 className="mt-5"><i className="fas fa-film"></i> Recent videos</h3>
      <div className="row mb-5">
        {oldUrls.map((l, i) => <div className="col-md-3 mb-3 old-urls" key={'url' + i}>
          <a href={l}>
            <img
              key={'url' + i}
              src={`https://i.ytimg.com/vi/${l.split('=')[1]}/0.jpg`}
              alt="youtube"
              className="w-100 img-thumbnail"
            />
          </a>
          <button onClick={() => { removeUrl(l) }} className="btn-rm">
          <i class="fas fa-times-circle"></i>
          </button>
        </div>)}
      </div></>}
  </>;
}