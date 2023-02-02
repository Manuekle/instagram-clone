/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React from 'react';

function Home(props) {
  function HomeActive() {
    if (props.active === 1) {
      return (
        <svg
          aria-label="Inicio"
          className="_ab6-"
          color="#262626"
          fill="#262626"
          height={24}
          viewBox="0 0 24 24"
          width={24}
          {...props}
        >
          <path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z" />
        </svg>
      );
    }
    return (
      <svg
        aria-label="Inicio"
        className="_ab6-"
        color="#fafafa"
        fill="#fafafa"
        height={24}
        viewBox="0 0 24 24"
        width={24}
        {...props}
      >
        <path
          d="M9.005 16.545a2.997 2.997 0 012.997-2.997A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    );
  }

  return <HomeActive />;
}

export default Home;
