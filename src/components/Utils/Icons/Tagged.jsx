/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import * as React from 'react';

function Tagged(props) {
  function TaggedActive() {
    if (props.active === 12) {
      return (
        <svg
          className="_ab6-"
          color="#fafafa"
          fill="#fafafa"
          height={12}
          viewBox="0 0 24 24"
          width={12}
          {...props}
        >
          <path
            d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
          <path
            d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
          <circle
            cx={12.072}
            cy={11.075}
            fill="none"
            r={3.556}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      );
    }
    return (
      <svg
        className="_ab6-"
        color="#8e8e8e"
        fill="#8e8e8e"
        height={12}
        viewBox="0 0 24 24"
        width={12}
        {...props}
      >
        <path
          d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={props.stroke ? 1 : 2}
        />
        <path
          d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={props.stroke ? 1 : 2}
        />
        <circle
          cx={12.072}
          cy={11.075}
          fill="none"
          r={3.556}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={props.stroke ? 1 : 2}
        />
      </svg>
    );
  }

  return <TaggedActive />;
}

export default Tagged;
