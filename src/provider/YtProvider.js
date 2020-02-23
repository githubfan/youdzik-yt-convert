import React, { useState, createContext } from 'react';

export const YtContext = createContext();

export function YtProvider (props) {

  const [state, setState] = useState({
    ytUrl: '',
    streamInfo: {},
    audioServerUrl:'',
    videoServerUrl:'',
    error: ''
  });

  return <YtContext.Provider value={{ state, setState }} >
    {props.children}
  </YtContext.Provider>
}