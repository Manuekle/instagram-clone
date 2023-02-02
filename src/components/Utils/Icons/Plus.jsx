/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import * as React from 'react';

function Plus(props) {
  function PlusActive() {
    if (props.active === 9) {
      return (
        <svg
          aria-label="Configuraci\xF3n"
          className="_ab6-"
          color="#fafafa"
          fill="#fafafa"
          height={24}
          viewBox="0 0 24 24"
          width={24}
          {...props}
        >
          <path d="M3.5 6.5h17a1.5 1.5 0 000-3h-17a1.5 1.5 0 000 3zm17 4h-17a1.5 1.5 0 000 3h17a1.5 1.5 0 000-3zm0 7h-17a1.5 1.5 0 000 3h17a1.5 1.5 0 000-3z" />
        </svg>
      );
    }
    return (
      <svg
        aria-label="Configuraci\xF3n"
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
          d="M3 4L21 4"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12L21 12"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 20L21 20"
        />
      </svg>
    );
  }

  return <PlusActive />;
}

export default Plus;
