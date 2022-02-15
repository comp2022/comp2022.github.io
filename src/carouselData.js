import alg_vis from './media/alg_vis.png';
import rocks from './media/rocks.png';

export const data = Array.from({ length: 4 }).map((_, i) => (
  {
    "title": `Floodfill Visualiser ${i}`,
    "subtitle": `Simple visualiser for the floodfilling algorithm ${i}`,
    "media": (i % 2 === 0 ? alg_vis : rocks)
  }
));
  