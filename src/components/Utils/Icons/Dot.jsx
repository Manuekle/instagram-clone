/* eslint-disable no-unused-vars */
import * as React from 'react';

function Dot(props) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={12} cy={12} r={2} {...props} />
    </svg>
  );
}

export default Dot;
