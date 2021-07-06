import React from 'react';
import ImageProcessor from './ImageProcessor';
import ResizeImages from './ResizeImages';

const App = () => {
  return (
    <div className="content" style={{ paddingTop: '10px' }}>
      <ImageProcessor />
      <ResizeImages />
    </div>
  );
};

export default App;
