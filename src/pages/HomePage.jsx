/* eslint-disable no-unused-vars */
import React from 'react';

import Info from '../components/Utils/Info';
import Suggestions from '../components/Utils/Suggestions';
import MoreInfo from '../components/Utils/MoreInfo';
import Card from '../components/Utils/Card';
import Slider from '../components/Utils/Slider';

function HomePage() {
  return (
    <section className="grid grid-cols-2 gap-32">
      <div className="xl:col-span-1 col-span-2 w-full h-full flex flex-col justify-center items-center gap-12">
        <span className="w-[28em]">
          <Slider />
        </span>
        <Card />
      </div>
      {/* <div className="xl:col-span-1 col-span-2 w-[22em] flex flex-col gap-4">
        <Info />
        <span className="flex justify-between items-center">
          <h1 className="text-white/60 text-xs">Sugerencias para ti</h1>
          <button type="button">
            <h1 className="text-white hover:text-white/60 text-xs">Ver todo</h1>
          </button>
        </span>
        <Suggestions />
        <MoreInfo />
      </div> */}
    </section>
  );
}

export default HomePage;
