/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Routes as Browse, Route, useLocation } from 'react-router-dom';

// RoutePages
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import NotFoundPage from '../pages/NotFoundPage';
import Header from './Header';

import Reload from './Utils/Reload';

function Routes({ setReload, reload, setBackground }) {
  const locate = useLocation();

  useEffect(() => {
    // change path
    setReload(true);
    setTimeout(() => {
      setReload(false);
    }, 500);

    if (locate.pathname === '/') {
      setBackground('bg-black');
    } else {
      setBackground('bg-[#121212] h-full');
    }
  }, [locate.pathname, setBackground, setReload]);

  return (
    <>
      {reload && <Reload />}
      <section className="grid grid-cols-12 relative">
        <article className="hidden xl:block relative col-span-2">
          <Header />
        </article>
        <article className="relative xl:col-span-10 col-span-12 w-full h-full container mx-auto xl:px-80 flex px-auto justify-center py-9">
          <Browse>
            <Route index path="/" element={<HomePage />} />
            <Route path="/profile/*" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Browse>
        </article>
      </section>
    </>
  );
}

export default Routes;
