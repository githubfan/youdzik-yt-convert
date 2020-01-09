import React from 'react'

export default function MediaObject ({ info, ytUrl }) {
  return (
    <div className="media mb-3 w-75 mx-auto box">
      <img
        src={`https://i.ytimg.com/vi/${ytUrl.split('=')[1]}/0.jpg`}
        className="mr-3"
        alt="youtube"
        style={{ maxWidth: '100px' }}
      />

      <div className="media-body">
        <h5 className="mt-0">{info && info.description}</h5>
        <p className="m-0">{info.author && info.author.name}</p>
        {info.media && info.media.category}
      </div>
    </div>
  )
}
