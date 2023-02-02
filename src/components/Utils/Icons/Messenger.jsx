/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import * as React from 'react';

function Messenger(props) {
  function MessengerActive() {
    if (props.active === 5) {
      return (
        <svg
          aria-label="Messenger"
          className="_ab6-"
          color="#fafafa"
          fill="#fafafa"
          height={24}
          viewBox="0 0 24 24"
          width={24}
          {...props}
        >
          <path d="M12.003 1.131a10.487 10.487 0 00-10.87 10.57 10.194 10.194 0 003.412 7.771l.054 1.78a1.67 1.67 0 002.342 1.476l1.935-.872a11.767 11.767 0 003.127.416 10.488 10.488 0 0010.87-10.57 10.487 10.487 0 00-10.87-10.57zm5.786 9.001l-2.566 3.983a1.577 1.577 0 01-2.278.42l-2.452-1.84a.63.63 0 00-.759.002l-2.556 2.049a.659.659 0 01-.96-.874L8.783 9.89a1.576 1.576 0 012.277-.42l2.453 1.84a.63.63 0 00.758-.003l2.556-2.05a.659.659 0 01.961.874z" />
        </svg>
      );
    }
    return (
      <svg
        aria-label="Messenger"
        className="_ab6-"
        color="#fafafa"
        fill="#fafafa"
        height={24}
        viewBox="0 0 24 24"
        width={24}
        {...props}
      >
        <path
          d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit={10}
          strokeWidth={1.739}
        />
        <path
          d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z"
          fillRule="evenodd"
        />
      </svg>
    );
  }

  return <MessengerActive />;
}

export default Messenger;
