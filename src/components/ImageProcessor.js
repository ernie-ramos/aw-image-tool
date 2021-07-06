import React, { useState, useEffect } from 'react';

import { imageProcessor } from '../logic/imageProcessor';

const ImageProcessor = () => {
  const [files, setFiles] = useState({});

  const onChange = (e) => setFiles(e.target.files);

  useEffect(() => {
    if (files.length !== undefined) {
      imageProcessor(files);
    }
  }, [files]);

  return (
    <div className="ui centered card">
      <h1 className="content">Step 1:</h1>
      <div className="content">
        <label htmlFor="file-upload">Upload Folder of Images</label>
        <input
          className="ui left icon input loading"
          id="file-upload"
          type="file"
          webkitdirectory="true"
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default ImageProcessor;
