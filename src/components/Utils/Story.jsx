/* eslint-disable no-unused-vars */
import React from 'react';
import Add from './Icons/Add';

function Story() {
  return (
    <button
      type="button"
      className="flex flex-col gap-2 items-center w-[5.5em]"
    >
      <div className="h-[5.5em] w-[5.5em] border border-zinc-700 rounded-full flex justify-center items-center">
        <Add className="w-11 h-11" />
      </div>
      <h1 className="text-white text-[12px] w-[5.5em] font-bold">Nueva</h1>
    </button>
  );
}

export default Story;
