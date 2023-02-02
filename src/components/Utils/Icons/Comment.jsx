/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import * as React from 'react';

function Comment(props) {
  function CommentActive() {
    if (props.active) {
      return (
        <svg
          aria-label="Comentar"
          className="_ab6-"
          color="#fafafa"
          fill="#fafafa"
          height={24}
          viewBox="0 0 24 24"
          width={24}
          {...props}
        >
          <path
            d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
            fill="#fafafa"
            stroke="#fafafa"
            color="#fafafa"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      );
    }
    return (
      <svg
        aria-label="Comentar"
        className="_ab6-"
        color="#fafafa"
        fill="#fafafa"
        height={24}
        viewBox="0 0 24 24"
        width={24}
        {...props}
      >
        <path
          d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    );
  }

  return <CommentActive />;
}

export default Comment;
