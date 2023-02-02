/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import * as React from 'react';

function Explore(props) {
  function ExploreActive() {
    if (props.active === 3) {
      return (
        <svg
          aria-label="Explorar"
          className="_ab6-"
          color="#fafafa"
          fill="#fafafa"
          height={24}
          viewBox="0 0 24 24"
          width={24}
          {...props}
        >
          <path d="M13.173 13.164l1.491-3.829-3.83 1.49zM12.001.5a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012.001.5zm5.35 7.443l-2.478 6.369a1 1 0 01-.57.569l-6.36 2.47a1 1 0 01-1.294-1.294l2.48-6.369a1 1 0 01.57-.569l6.359-2.47a1 1 0 011.294 1.294z" />
        </svg>
      );
    }
    return (
      <svg
        aria-label="Explorar"
        className="_ab6-"
        color="#fafafa"
        fill="#fafafa"
        height={24}
        viewBox="0 0 24 24"
        width={24}
        {...props}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.941 13.953L7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953z"
        />
        <path
          fillRule="evenodd"
          d="M10.06 10.056L13.949 13.945 7.581 16.424 10.06 10.056z"
        />
        <circle
          cx={12.001}
          cy={12.005}
          fill="none"
          r={10.5}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    );
  }

  return <ExploreActive />;
}

export default Explore;
