/* eslint-disable no-unused-vars */
import React from 'react';
import Avatar from './Avatar';
import Verified from './Icons/Verified';

function Suggestions() {
  const array = [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' }
  ];
  return (
    <>
      {array.map((item) => (
        <div className="flex items-center justify-between">
          <div className="flex flex-row items-center gap-3">
            <Avatar small />
            <span className="flex flex-col">
              <article className="flex flex-row gap-1 items-center">
                <h1 className="text-white text-xs">manudev.jsx</h1>
                <Verified className="h-[14px] w-[14px]" />
              </article>
              <h1 className="text-zinc-400 text-xs">
                Recomendado por Instagram
              </h1>
            </span>
          </div>
          <span>
            <h1 className="text-[#3797F0] text-xs">Seguir</h1>
          </span>
        </div>
      ))}
    </>
  );
}

export default Suggestions;
