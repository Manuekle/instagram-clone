/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  LazyLoadImage,
  trackWindowScroll
} from 'react-lazy-load-image-component';
import Comment from './Icons/Comment';
import Heart from './Icons/Heart';
import Play from './Icons/Play';

function Reel({ scrollPosition }) {
  const image = 'https://picsum.photos/3000/3000';
  const [hover, setHover] = useState(false);
  return (
    <button
      type="button"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="w-full h-[330px]"
    >
      <figure className="relative w-full h-full object-cover flex">
        <LazyLoadImage
          effect="blur"
          src={image}
          scrollPosition={scrollPosition}
          className="w-full h-full object-cover"
        />
        {!hover && (
          <div className="absolute flex flex-row gap-6 z-10 justify-start items-end h-full w-full p-4">
            <span className="flex flex-row gap-2 items-center">
              <Play className="w-4 h-4 flex items-center" active />
              <h1 className="text-white text-sm font-bold">0</h1>
            </span>
          </div>
        )}
        {hover && (
          <div className="absolute flex flex-row gap-6 z-10 justify-center items-center bg-black/40 h-full w-full">
            <span className="flex flex-row gap-2 items-center">
              <Heart className="w-5 h-5 flex items-center" active />
              <h1 className="text-white text-sm font-bold">0</h1>
            </span>
            <span className="flex flex-row gap-2 items-center">
              <Comment className="w-5 h-5 flex items-center" active />
              <h1 className="text-white text-sm font-bold">3</h1>
            </span>
          </div>
        )}
      </figure>
    </button>
  );
}

export default Reel;
