/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from '../components/Routes';

function App() {
  const [reload, setReload] = useState(false);
  const [background, setBackground] = useState('bg-black');

  return (
    <main className={background}>
      <Router>
        <Routes
          setReload={setReload}
          reload={reload}
          setBackground={setBackground}
        />
      </Router>
    </main>
  );
}

export default App;
