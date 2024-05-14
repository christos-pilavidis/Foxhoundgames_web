// CookieConsent.tsx
'use client'; // Ensures this is a client-side component in Next.js 13+

import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [expandNecessary, setExpandNecessary] = useState<boolean>(false);
  const [expandNonNecessary, setExpandNonNecessary] = useState<boolean>(false);
  const [nonNecessaryChecked, setNonNecessaryChecked] =
    useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      const cookieConsent = localStorage.getItem('cookieConsent');
      if (!cookieConsent) {
        setIsVisible(true);
      }
    }, 500);
  }, []);

  const handleAccept = (): void => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const toggleSettings = (): void => {
    setShowSettings(!showSettings);
  };

  const toggleNecessary = (): void => {
    setExpandNecessary(!expandNecessary);
  };

  const toggleNonNecessary = (): void => {
    setExpandNonNecessary(!expandNonNecessary);
  };

  const handleNonNecessaryCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNonNecessaryChecked(event.target.checked);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between bg-purple-900 p-2 text-xs text-white sm:text-sm md:p-4">
        <p className="flex-1">
          We use cookies to enhance your experience. By clicking Accept, you
          agree to our use of cookies
        </p>
        <div className="flex-shrink-0 space-x-2">
          <button
            onClick={handleAccept}
            className="rounded bg-white px-2 py-1 text-xs font-bold text-purple-900 sm:px-4 sm:py-2 sm:text-sm"
          >
            Accept
          </button>
          <button
            onClick={toggleSettings}
            className="rounded bg-white px-2 py-1 text-xs font-bold text-purple-900 sm:px-4 sm:py-2 sm:text-sm"
          >
            Cookie Settings
          </button>
        </div>
      </div>

      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="mx-2 w-full max-w-lg rounded-lg bg-white p-4 text-xs text-purple-900 shadow-lg sm:text-sm">
            <h2 className="mb-2 text-lg font-bold text-purple-800 sm:text-xl">
              Privacy Overview
            </h2>
            <p className="text-black">
              This website uses cookies to enhance your browsing experience.
              Some cookies are essential and are saved on your browser because
              they are necessary for the basic functions of the website.
              Additionally, we utilize third-party cookies to analyze and
              comprehend your usage of our website. These cookies are only
              stored with your explicit consent. You have the choice to decline
              these cookies. However, please be aware that choosing to reject
              some cookies may impact your experience on the site.
            </p>
            <div
              className="mt-2 cursor-pointer rounded-lg p-2 hover:bg-gray-100"
              onClick={toggleNecessary}
            >
              <div className="flex items-center justify-between text-purple-800">
                <div className="flex items-center">
                  <i
                    style={{
                      transform: `rotate(${expandNecessary ? '180deg' : '0deg'})`,
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    ▼
                  </i>
                  <span className="ml-2">Necessary</span>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  className="h-4 w-4 accent-purple-700"
                />
              </div>
              {expandNecessary && (
                <p className="mt-1 text-xs text-black">
                  Necessary cookies are crucial for the proper operation of the
                  website. This category includes cookies that support basic
                  functions and ensure the security of the website. These
                  cookies do not collect any personal information.
                </p>
              )}
            </div>
            <div className="mt-2 rounded-lg p-2">
              <div className="flex items-center justify-between text-purple-800">
                <div
                  className="flex cursor-pointer items-center"
                  onClick={toggleNonNecessary}
                >
                  <i
                    style={{
                      transform: `rotate(${expandNonNecessary ? '180deg' : '0deg'})`,
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    ▼
                  </i>
                  <span className="ml-2">Non-Necessary</span>
                </div>
                <input
                  type="checkbox"
                  id="nonNecessaryCookies"
                  checked={nonNecessaryChecked}
                  onChange={handleNonNecessaryCheckboxChange}
                  className="ml-4 h-4 w-4 accent-purple-700"
                />
              </div>
              {expandNonNecessary && (
                <p className="mt-1 text-xs text-black">
                  Non-necessary cookies are not essential for the website to
                  function. They are typically used to gather personal data
                  through analytics, advertisements, and other embedded content.
                  Obtaining user consent before activating these cookies on your
                  website is required.
                </p>
              )}
            </div>
            <div className="mt-4">
              <button
                onClick={handleAccept}
                className="rounded bg-purple-600 px-4 py-2 font-bold text-white hover:bg-purple-700"
              >
                Save & Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
