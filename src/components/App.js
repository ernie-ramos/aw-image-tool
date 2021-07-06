import React from 'react';
import ImageProcessor from './ImageProcessor';
import ResizeImages from './ResizeImages';

const App = () => {
  return (
    <div
      className="ui one column stackable center aligned page grid"
      style={{ paddingTop: '10px' }}
    >
      <div>
        <h1>AutoWeb Image Tool</h1>
        <ImageProcessor />
        <ResizeImages />
      </div>
    </div>
  );
};

export default App;
