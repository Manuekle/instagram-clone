/* eslint-disable no-unused-vars */
import * as React from 'react';

function Arrow(props) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#clip0_429_11254)"
        stroke="#292929"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 17l5-5M15 12l-5-5" />
      </g>
      <defs>
        <clipPath id="clip0_429_11254">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Arrow;
