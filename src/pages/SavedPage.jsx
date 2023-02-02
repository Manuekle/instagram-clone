/* eslint-disable no-unused-vars */
import React from 'react';
import Add from '../components/Utils/Icons/Add';

function SavedPage() {
  return (
    <div className="flex flex-col gap-2 w-full pt-12">
      <div className="flex justify-between w-full">
        <h1 className="text-white text-xs font-light">
          Solo tú puedes ver lo que guardaste
        </h1>
        <button
          type="button"
          className="flex items-center gap-1 text-[#3797F0] hover:text-white"
        >
          <h1 className="text-xs font-bold">+ Nueva colección</h1>
        </button>
      </div>
      <div className="flex justify-center">
        <div className="h-[300px] w-[300px] border border-zinc-600 rounded-md relative">
          <h1 className="absolute text-white text-lg bottom-4 left-6">
            Todas las publicaciones
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SavedPage;
