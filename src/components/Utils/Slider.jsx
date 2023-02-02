/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Avatar from './Avatar';
import Arrow from './Icons/Arrow';

function Slider() {
  const array = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
    { id: 6, name: '6' },
    { id: 7, name: '7' },
    { id: 8, name: '8' },
    { id: 9, name: '9' },
    { id: 10, name: '10' },
    { id: 11, name: '11' },
    { id: 12, name: '12' }
  ];

  return (
    <section className="relative w-full">
      <Splide
        hasTrack={false}
        options={{
          pagination: false,
          perPage: 6,
          perMove: 3,
          rewindByDrag: true,
          drag: false,
          speed: 500,
          autoplay: false,
          gap: '1em',
          arrows: true,
          fade: true
        }}
      >
        <SplideTrack>
          {array.map((item) => (
            <SplideSlide key={item.id}>
              <button
                type="button"
                className="flex flex-col gap-1 items-center"
              >
                <Avatar large active />
                <h1 className="text-xs text-white">manudev</h1>
              </button>
            </SplideSlide>
          ))}
        </SplideTrack>
        <div className="splide__arrows absolute w-full bottom-11">
          <button
            type="button"
            className="splide__arrow splide__arrow--prev outline-none flex justify-center items-center bg-white h-6 w-6"
          >
            <Arrow />
          </button>
          <button
            type="button"
            className="splide__arrow splide__arrow--next outline-none flex justify-center items-center bg-white h-6 w-6"
          >
            <Arrow />
          </button>
        </div>
      </Splide>
    </section>
  );
}

export default Slider;
