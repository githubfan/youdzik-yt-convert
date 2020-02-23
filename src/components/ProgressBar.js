import React, { useState, useEffect } from 'react';
import '../styles/progress-bar.css';
var i = 0;
export default function ProgressBar () {


  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (i === 0) {
      i = 1;

      let width = 1;
      let id = setInterval(frame, 100);

      function frame () {
        if (width >= 10) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          setProgress(width);
        }
      }
    }

  }, []);

  return <div className="progress-bar">
    <div style={{ width: (progress*10) + '%' }}><span>{(progress*10) + '%'}</span></div>
  </div>;
}