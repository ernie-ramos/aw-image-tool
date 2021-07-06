import React from 'react';

const ImageProcessor = () => {
  return (
    <div className="ui centered card">
      <h1 className="content">Step 2:</h1>
      <div className="content">
        <p>
          Click below to open Sprout Social Landscape in a new tab. There you
          can resize each image to specific dimensions.
        </p>

        <button
          href="https://sproutsocial.com/landscape/"
          target="_blank"
          className="ui primary button"
        >
          Sprout Social Landscape
        </button>
      </div>
    </div>
  );
};

export default ImageProcessor;
