'use client';

import React, { useState, useEffect } from 'react';

export interface HeroProps {
  mediaSrc: string;
  portraitMediaSrc?: string; // Optional portrait video source
}

export function Hero({ mediaSrc, portraitMediaSrc }: HeroProps) {
  const [currentMediaSrc, setCurrentMediaSrc] = useState(mediaSrc);
  const [initialLoad, setInitialLoad] = useState(true);

  // Helper function to determine if the screen is in portrait mode
  const isPortrait = () => window.innerHeight > window.innerWidth;

  // Effect to switch video source based on screen orientation
  useEffect(() => {
    const handleResize = () => {
      const shouldBePortrait = isPortrait();
      if (shouldBePortrait && portraitMediaSrc) {
        if (currentMediaSrc !== portraitMediaSrc) {
          setCurrentMediaSrc(portraitMediaSrc);
        }
      } else {
        if (currentMediaSrc !== mediaSrc) {
          setCurrentMediaSrc(mediaSrc);
        }
      }
    };

    // Execute only once after initial render and when dependencies change
    if (initialLoad) {
      handleResize();
      setInitialLoad(false);
    }

    // Add event listener on mount
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mediaSrc, portraitMediaSrc, currentMediaSrc, initialLoad]);

  const isVideo = /\.(mp4|webm)$/.test(currentMediaSrc);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {isVideo ? (
        <>
          <video
            id="heroVideo"
            src={currentMediaSrc}
            autoPlay
            muted
            playsInline
            loop={false}
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
                      this.pause();  // Keep stopping the video at the last frame
                    });
                  }
                });
              `,
            }}
          />
        </>
      ) : (
        <img
          src={currentMediaSrc}
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </section>
  );
}
