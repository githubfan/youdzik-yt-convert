import React from 'react'

export default function MediaObject ({ info }) {
  return (
    <div className="media mb-3">
      <img src={info.author && info.author.avatar} className="mr-3" alt="..." />
      <div className="media-body">
        <h5 className="mt-0">{info && info.description}</h5>
        {info.media && info.media.category}
      </div>
    </div>
  )
}
