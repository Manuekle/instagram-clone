/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import * as React from 'react';

function Save(props) {
  function SaveActive() {
    if (props.active === 11) {
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
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 21L12 13.44 4 21 4 3 20 3 20 21z"
          />
        </svg>
      );
    }
    return (
      <svg
        aria-label="Guardar"
        className="_ab6-"
        color="#8e8e8e"
        fill="#8e8e8e"
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
          d="M20 21L12 13.44 4 21 4 3 20 3 20 21z"
        />
      </svg>
    );
  }

  return <SaveActive />;
}

export default Save;
