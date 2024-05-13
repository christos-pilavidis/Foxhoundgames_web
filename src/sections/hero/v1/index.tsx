// src/sections/hero/v1/index.tsx
import React from 'react';

export interface HeroProps {
  mediaSrc: string;
}

export function Hero({ mediaSrc }: HeroProps) {
  const isVideo = /\.(mp4|webm)$/.test(mediaSrc);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {isVideo ? (
        <>
          <video
            id="heroVideo"
            src={mediaSrc}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener('DOMContentLoaded', function() {
                  var video = document.getElementById('heroVideo');
                  if (video) {
                    video.addEventListener('ended', function() {
                      this.pause();
                    });
                  }
                });
              `,
            }}
          />
        </>
      ) : (
        <img
          src={mediaSrc}
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </section>
  );
}
