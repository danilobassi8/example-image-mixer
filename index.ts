import { ImageMixer, Layer } from 'image-mixer';

const rootFolder = process.cwd();

const mixer = new ImageMixer({
  layersPath: `${rootFolder}/assets`,
  output: `${rootFolder}/output`,
  layers: [
    new Layer({ name: 'hair', position: 4, probability: 0.8 }),
    new Layer({ name: 'eyes_and_noses', position: 3, probability: 1 }),
    new Layer({ name: 'mouth', position: 2, probability: 1 }),
    new Layer({ name: 'base', position: 1, probability: 1 }),
  ],
});

mixer.generateResults().then(() => console.log('Done!'));
