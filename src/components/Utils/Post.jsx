/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Comment from './Icons/Comment';
import Heart from './Icons/Heart';

function Post() {
  const image = 'https://picsum.photos/2000/2000';
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
    >
      <figure className="relative w-full h-full object-cover flex justify-center items-center">
        <LazyLoadImage
          effect="blur"
          src={image}
          className="w-full h-full object-center object-contain"
        />
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

export default Post;
