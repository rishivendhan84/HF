
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import g1 from './g1.jpg'
import g2 from './g2.jpg'
import g3 from './g3.jpg'
import g4 from './g4.jpg'
import g5 from './g5.jpg'
import g6 from './g6.jpg'
import g7 from './g7.jpg'
import g8 from './g8.jpg'
import g9 from './g9.jpg'
import g10 from './g10.jpg'
import g11 from './g11.jpg'
import g12 from './g12.jpg'
import g13 from './g13.jpg'
import g14 from './g14.jpg'
import g15 from './g15.jpg'

const itemData = [
  {
    img: g9,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: g14,
    title: 'Burger',
  },
  {
    img: g3,
    title: 'Camera',
  },
  {
    img: g11,
    title: 'Coffee',
    cols:2,
  },
  {
    img: g12,
    title: 'Hats',
    cols: 2,
  },
  {
    img: g5,
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: g6,
    title: 'Basketball',
  },
  {
    img: g10,
    title: 'Fern',
  },
  {
    img: g1,
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: g15,
    title: 'Tomato basil',
  },
  {
    img: g2,
    title: 'Sea star',
  },
  {
    img: g13,
    title: 'Bike',
    cols: 2,
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageList1() {
  return (
    <ImageList
      // sx={{ height: 550 }}
      variant="quilted"
      cols={4}
      rowHeight={220}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 150, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


