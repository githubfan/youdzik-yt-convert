import React, { useState, useContext } from 'react';
import { YtContext } from '../provider/YtProvider';
import LocalUrl from '../util/LocalUrl';
import '../styles/OldUrls.css';
import { withRouter } from 'react-router-dom';

function OldUrls (props) {

  const { state, setState } = useContext(YtContext);
  const [oldUrls, setOldUrls] = useState(LocalUrl.getUrls());

  const removeUrl = (url) => {
    let newUrls = LocalUrl.removeOne(url);
    setOldUrls(newUrls);
  }

  const reConvert = (vidUrl) => {
    setState({ ...state, ytUrl: vidUrl });
    props.history.push('/');
  }

  return <>
    {oldUrls.length > 0 && <>
      <h3 className="mt-5"><i className="fas fa-film"></i> Recent videos</h3>
      <p className="m-0">You could re-convert your videos by clicking on one of them. You will be redirected to the home page with that URL.</p>
      <p className="mt-0">You don't need to fill out the form, it will be filled in automatically.</p>
      <div className="row mb-5">
        {oldUrls.map((l, i) => <div className="col-md-3 mb-3 old-urls" key={'url' + i}>
          <div onClick={() => { reConvert(l) }} className="old-url-col">
            <img
              key={'url' + i}
              src={`https://i.ytimg.com/vi/${l.split('=')[1]}/0.jpg`}
              alt="youtube"
              className="w-100 img-thumbnail"
            />
          </div>
          <button onClick={() => { removeUrl(l) }} className="btn-rm">
            <i className="fas fa-times-circle"></i>
          </button>
        </div>)}
      </div>
    </>}
  </>;
}

export default withRouter(OldUrls);