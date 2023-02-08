/* eslint-disable no-unused-vars */
import React from 'react';
import Reel from '../components/Utils/Reel';

function ReelsPage() {
  return (
    <div className="grid grid-cols-4 xl:gap-8 gap-1">
      <Reel />
      <Reel />
      <Reel />
      <Reel />
      <Reel />
      <Reel />
    </div>
  );
}

export default ReelsPage;
