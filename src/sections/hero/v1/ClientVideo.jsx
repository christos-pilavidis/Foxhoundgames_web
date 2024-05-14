// src/sections/hero/v1/ClientVideo.jsx

import React from 'react';

const ClientVideo = ({ src }) => {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover"
      src={src}
      autoPlay
      loop
      muted
      onError={(e) => console.error('Video error:', e)}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default ClientVideo;
