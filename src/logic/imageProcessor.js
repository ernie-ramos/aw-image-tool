import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const imageProcessor = (files) => {
  // convert FileList into Array to use forEach
  const imagesArray = Array.from(files);

  // Filter images according to resolution
  const filteredImgArr = imagesArray.filter((image) =>
    image.name.includes('2048')
  );

  // Get 20 random images out of filteredImgArr and put them in finalImgArr
  const finalImgArr = [];

  //get 1 random index, 20 times
  for (let i = 0; i < 33; i++) {
    const index = getRandomInt(0, filteredImgArr.length); // mini = inclusive, max = exclusive
    finalImgArr.push(filteredImgArr[index]);
  }

  // Create a folder using JSZip
  const zip = new JSZip();
  const photoZip = zip.folder('Processed Images');

  // For each image in finalImgArr
  finalImgArr.forEach((img) => photoZip.file(img.name, img));

  //Download zipped file with 20 images in it
  zip.generateAsync({ type: 'blob' }).then(function (content) {
    saveAs(content, 'ProcessedImages.zip');
  });
};

//Helpers
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
