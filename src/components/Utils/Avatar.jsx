/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function Avatar({ small, medium, large, active, profile, story }) {
  function getSize() {
    if (small) return 'h-6 w-6';
    if (medium) return 'h-9 w-9';
    if (large) return 'h-14 w-14';
    if (profile) return 'h-36 w-36';
    if (story) return 'h-20 w-20';
    return 'h-8 w-8';
  }

  function getWrapper() {
    if (!active)
      if (small) return 'h-7 w-7 border border-zinc-700 rounded-full';
      else if (medium) return 'h-10 w-10 border border-zinc-700 rounded-full';
      else if (large)
        return 'h-[60px] w-[60px] border border-zinc-700 rounded-full';
      else if (profile)
        return 'h-[9.6em] w-[9.6em] border-2 border-zinc-700 rounded-full';
      else if (story)
        return 'h-[5.5em] w-[5.5em] border border-zinc-700 rounded-full';
    return '';
  }

  function getActive() {
    if (active)
      if (large) return 'h-[60px] w-[60px]';
      else if (medium) return 'h-[40px] w-[40px]';
      else if (small) return 'h-7 w-7';
    return '';
  }

  return (
    <div
      className={
        active
          ? `relative flex items-center justify-center z-10 overflow-hidden`
          : `relative flex ${getWrapper()} items-center justify-center z-10 overflow-hidden`
      }
    >
      {active && (
        <div
          className={`${getActive()} rounded-full`}
          style={{
            background:
              'linear-gradient(45deg,#ffa95f 5%, #f99c4a 15%,#f47838 30%,#e75157 45%,#d92d7a 70%,#cc2a92 80%,#c32e92 95%)'
          }}
        />
      )}
      <figure className="absolute flex justify-center items-center">
        <img
          src="https://picsum.photos/300"
          alt="avatar"
          className={
            active
              ? `${getSize()} rounded-full overflow-clip object-contain bg-black p-[2px]`
              : `${getSize()} rounded-full overflow-clip object-contain bg-black`
          }
        />
      </figure>
    </div>
  );
}

export default Avatar;
