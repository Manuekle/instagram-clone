/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import Avatar from '../components/Utils/Avatar';
import Settings from '../components/Utils/Icons/Settings';
import Arrow from '../components/Utils/Icons/Arrow';
import Reel from '../components/Utils/Icons/Reel';
import Save from '../components/Utils/Icons/Save';
import Tagged from '../components/Utils/Icons/Tagged';
import Publish from '../components/Utils/Icons/Publish';
import Story from '../components/Utils/Story';

import '@splidejs/react-splide/css';
// pages
import PublishPage from './PublishPage';
import ReelsPage from './ReelsPage';
import TaggedPage from './TaggedPage';
import SavedPage from './SavedPage';
// footer
import Footer from '../components/Footer';

function ProfilePage() {
  const [active, setActive] = useState(10);
  const locate = useLocation();
  const [reload, setReload] = useState(false);

  const array = [
    { id: 1, name: '1' },
    { id: 2, name: '2' }
    // { id: 3, name: '3' }
  ];

  useEffect(() => {
    setReload(true);
    setTimeout(() => {
      setReload(false);
    }, 500);
  }, [setReload, locate.pathname]);

  return (
    <section className="flex flex-col gap-16">
      <div className="xl:w-[60em] w-full grid grid-cols-12 gap-8">
        <div className="col-span-4 flex justify-center items-center">
          <Avatar profile />
        </div>
        <div className="col-span-8 flex flex-col justify-between gap-5">
          <article className="flex flex-row gap-4 items-center">
            <h1 className="text-white text-lg">manudev.jsx</h1>
            <button
              type="button"
              className="bg-white rounded-md py-[5px] px-4 hover:opacity-80 flex justify-center items-center"
            >
              <h1 className="text-black text-[13px] font-black">
                Editar perfil
              </h1>
            </button>
            <button type="button">
              <Settings />
            </button>
          </article>
          <article className="flex flex-row gap-9 items-center">
            <h1 className="text-white text-[15px]">
              <strong>14</strong> publicaciones
            </h1>
            <h1 className="text-white text-[15px]">
              <strong>31</strong> seguidores
            </h1>
            <h1 className="text-white text-[15px]">
              <strong>339</strong> seguidos
            </h1>
          </article>
          <article className="flex flex-col gap-0">
            <h1 className="text-white text-[13px]">
              <strong>Manuel Esteban</strong>
            </h1>
            <p className="text-white text-[13px] w-52">
              $ Full Stack Web Developer
            </p>
          </article>
        </div>
      </div>
      <div className="xl:w-[60em] w-full relative">
        {array.length > 7 && (
          <Splide
            hasTrack={false}
            options={{
              pagination: false,
              perPage: 7,
              perMove: 3,
              rewindByDrag: true,
              drag: false,
              speed: 500,
              autoplay: false,
              gap: '3em',
              arrows: true,
              fade: true
            }}
          >
            <SplideTrack>
              {array.map((item) => (
                <SplideSlide key={item.id}>
                  <button
                    type="button"
                    className="flex flex-col gap-2 items-center"
                  >
                    <Avatar story />
                    <h1 className="text-white text-[12px] font-bold w-[5.5em]">
                      manudev.jsx
                    </h1>
                  </button>
                </SplideSlide>
              ))}
              <SplideSlide>
                <Story />
              </SplideSlide>
            </SplideTrack>
            <div className="splide__arrows absolute xl:w-[60em] w-full bottom-11">
              <button
                type="button"
                className="splide__arrow splide__arrow--prev outline-none flex justify-center items-center bg-white h-6 w-6"
              >
                <Arrow />
              </button>
              <button
                type="button"
                className="splide__arrow splide__arrow--next outline-none flex justify-center items-center bg-white h-6 w-6"
              >
                <Arrow />
              </button>
            </div>
          </Splide>
        )}
        {array.length <= 7 && (
          <div className="flex flex-row w-full gap-14">
            {array.slice(0, 6).map((item) => (
              <button
                type="button"
                className="flex flex-col gap-2 items-center"
              >
                <Avatar story />
                <h1 className="text-white text-[12px] font-bold w-[5.5em]">
                  manudev.jsx
                </h1>
              </button>
            ))}
            <Story />
          </div>
        )}
      </div>
      <div className="xl:w-[60em] w-full gap-0">
        <div className="flex relative justify-center gap-16">
          <hr className="absolute top-0 left-0 w-full h-0.5 border-zinc-800" />
          <Link
            to="/profile/"
            onClick={() => setActive(10)}
            className={
              active === 10
                ? 'relative border py-4 border-l-0 border-r-0 border-b-0 border-white flex flex-row gap-2 items-center'
                : 'relative border py-4 border-l-0 border-r-0 border-b-0 border-zinc-800 flex flex-row gap-2 items-center'
            }
          >
            <Publish className="h-3 w-3" active={active} />
            <h1
              className={
                active === 10
                  ? 'text-white text-[12px] uppercase font-bold'
                  : 'text-zinc-400 text-[12px] uppercase font-bold'
              }
            >
              Publicaciones
            </h1>
          </Link>
          <Link
            to="/profile/reels"
            onClick={() => setActive(4)}
            className={
              active === 4
                ? 'relative border py-4 border-l-0 border-r-0 border-b-0 border-white flex flex-row gap-2 items-center'
                : 'relative border py-4 border-l-0 border-r-0 border-b-0 border-zinc-800 flex flex-row gap-2 items-center'
            }
          >
            <Reel className="h-3 w-3" active={active} />
            <h1
              className={
                active === 4
                  ? 'text-white text-[12px] uppercase font-bold'
                  : 'text-zinc-400 text-[12px] uppercase font-bold'
              }
            >
              Reels
            </h1>
          </Link>
          <Link
            to="/profile/saved"
            onClick={() => setActive(11)}
            className={
              active === 11
                ? 'relative border py-4 border-l-0 border-r-0 border-b-0 border-white flex flex-row gap-2 items-center'
                : 'relative border py-4 border-l-0 border-r-0 border-b-0 border-zinc-800 flex flex-row gap-2 items-center'
            }
          >
            <Save className="h-3 w-3" active={active} />
            <h1
              className={
                active === 11
                  ? 'text-white text-[12px] uppercase font-bold'
                  : 'text-zinc-400 text-[12px] uppercase font-bold'
              }
            >
              Guardado
            </h1>
          </Link>
          <Link
            to="/profile/tagged"
            onClick={() => setActive(12)}
            className={
              active === 12
                ? 'relative border py-4 border-l-0 border-r-0 border-b-0 border-white flex flex-row gap-2 items-center'
                : 'relative border py-4 border-l-0 border-r-0 border-b-0 border-zinc-800 flex flex-row gap-2 items-center'
            }
          >
            <Tagged className="h-3 w-3" active={active} />
            <h1
              className={
                active === 12
                  ? 'text-white text-[12px] uppercase font-bold'
                  : 'text-zinc-400 text-[12px] uppercase font-bold'
              }
            >
              Etiquetadas
            </h1>
          </Link>
        </div>
        {reload ? (
          <div className="flex justify-center h-96 items-center">
            <h1 className="text-white text-[13px] font-black">Cargando...</h1>
          </div>
        ) : (
          <Routes>
            <Route index path="/" element={<PublishPage />} />
            <Route path="reels" element={<ReelsPage />} />
            <Route path="saved" element={<SavedPage />} />
            <Route path="tagged" element={<TaggedPage />} />
          </Routes>
        )}
      </div>
      <Footer />
    </section>
  );
}

export default ProfilePage;
