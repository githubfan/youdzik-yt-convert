import React from 'react';

export default function Progress ({ isProgress }) {
  return <> {isProgress
    && <div className="progress">
      <div className="progress-bar bg-warning" role="progressbar"
        style={{ width: "100%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>}
  </>;
}