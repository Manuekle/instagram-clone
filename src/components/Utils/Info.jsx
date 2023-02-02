/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
import React from 'react';
import Avatar from './Avatar';

function Info() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-row items-center gap-3 h">
        <Avatar large />
        <span className="flex flex-col">
          <h1 className="text-white text-sm">manudev.jsx</h1>
          <h1 className="text-zinc-400 text-sm">Manuel Esteban</h1>
        </span>
      </div>
      <span>
        <h1 className="text-[#3797F0] text-xs">Cambiar</h1>
      </span>
    </div>
  );
}

export default Info;
