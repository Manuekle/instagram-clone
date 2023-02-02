/* eslint-disable no-unused-vars */
import React from 'react';
import Tagged from '../components/Utils/Icons/Tagged';

function TaggedPage() {
  return (
    <div className="flex pt-14 pb-20 flex-col justify-center items-center">
      <div className="h-[224px] w-[350px] flex flex-col justify-center items-center gap-3">
        <span className="h-16 w-16 border-2 border-zinc-800 rounded-full flex justify-center items-center">
          <Tagged className="text-zinc-800 h-10 w-10" stroke />
        </span>
        <h1 className="text-white text-[30px] font-extrabold text-center">
          Fotos en las que apareces
        </h1>
        <p className="text-center text-white text-[13px]">
          Cuando las personas te etiqueten en fotos, aparecerán aquí.
        </p>
      </div>
    </div>
  );
}

export default TaggedPage;
