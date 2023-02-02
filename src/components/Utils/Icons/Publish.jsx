/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import * as React from 'react';

function Publish(props) {
  function PublishActive() {
    if (props.active === 10) {
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
            d="M3 3H21V21H3z"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.015 3L9.015 21"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.985 3L14.985 21"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 9.015L3 9.015"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 14.985L3 14.985"
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
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3H21V21H3z"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.015 3L9.015 21"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.985 3L14.985 21"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 9.015L3 9.015"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 14.985L3 14.985"
        />
      </svg>
    );
  }

  return <PublishActive />;
}

export default Publish;
