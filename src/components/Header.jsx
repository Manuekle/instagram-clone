/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from './Utils/Avatar';
import InstaLogo from './Utils/Icons/InstaLogo';
import Home from './Utils/Icons/Home';
import Search from './Utils/Icons/Search';
import Explore from './Utils/Icons/Explore';
import Reel from './Utils/Icons/Reel';
import Messenger from './Utils/Icons/Messenger';
import Notify from './Utils/Icons/Notify';
import More from './Utils/Icons/More';
import Plus from './Utils/Icons/Plus';

function Header() {
  const [active, setActive] = useState(1);
  const [scale, setScale] = useState(false);
  return (
    <div className="text-white fixed border border-zinc-700 border-t-0 border-l-0 border-b-0 h-screen xl:w-[18em] 2xl:w-[22em] bg-black px-4 py-9 flex flex-col justify-between">
      <div className="flex flex-col justify-between">
        <Link to="/">
          <InstaLogo className="ml-2" />
        </Link>
        <div className="mt-10 flex flex-col gap-2">
          <Link
            onClick={() => setActive(1)}
            to="/"
            className="flex flex-row items-center gap-4 hover:bg-zinc-900/80 rounded-full px-3 py-3 transform transition duration-150"
          >
            <Home
              active={active}
              className="xl:h-5 xl:5-w 2xl:w-6 2xl:h-6 fill-white transform transition duration-150 hover:scale-[1.05]"
            />
            <h1
              className={
                active === 1
                  ? 'text-white font-bold text-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
                  : 'text-white font-light text-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
              }
            >
              Inicio
            </h1>
          </Link>
          <button
            onClick={() => setActive(2)}
            type="button"
            className="flex flex-row items-center gap-4 hover:bg-zinc-900/80 rounded-full px-3 py-3 transform transition duration-150"
          >
            <Search
              active={active}
              className="xl:h-5 xl:5-w 2xl:w-6 2xl:h-6 fill-white transform transition duration-150 hover:scale-[1.05]"
            />
            <h1
              className={
                active === 2
                  ? 'text-white font-boldtext-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
                  : 'text-white font-lighttext-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
              }
            >
              Buscar
            </h1>
          </button>
          <button
            onClick={() => setActive(3)}
            type="button"
            className="flex flex-row items-center gap-4 hover:bg-zinc-900/80 rounded-full px-3 py-3 transform transition duration-150"
          >
            <Explore
              active={active}
              className="xl:h-5 xl:5-w 2xl:w-6 2xl:h-6 fill-white transform transition duration-150 hover:scale-[1.05]"
            />
            <h1
              className={
                active === 3
                  ? 'text-white font-boldtext-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
                  : 'text-white font-lighttext-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
              }
            >
              Explorar
            </h1>
          </button>

          <button
            onClick={() => setActive(4)}
            type="button"
            className="flex flex-row items-center gap-4 hover:bg-zinc-900/80 rounded-full px-3 py-3 transform transition duration-150"
          >
            <Reel
              active={active}
              className="xl:h-5 xl:5-w 2xl:w-6 2xl:h-6 fill-white transform transition duration-150 hover:scale-[1.05]"
            />
            <h1
              className={
                active === 4
                  ? 'text-white font-boldtext-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
                  : 'text-white font-lighttext-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
              }
            >
              Reels
            </h1>
          </button>
          <button
            onClick={() => setActive(5)}
            type="button"
            className="flex flex-row items-center gap-4 hover:bg-zinc-900/80 rounded-full px-3 py-3 transform transition duration-150"
          >
            <Messenger
              active={active}
              className="xl:h-5 xl:5-w 2xl:w-6 2xl:h-6 fill-white transform transition duration-150 hover:scale-[1.05]"
            />
            <h1
              className={
                active === 5
                  ? 'text-white font-boldtext-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
                  : 'text-white font-lighttext-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
              }
            >
              Mensajes
            </h1>
          </button>
          <button
            onClick={() => setActive(6)}
            type="button"
            className="flex flex-row items-center gap-4 hover:bg-zinc-900/80 rounded-full px-3 py-3 transform transition duration-150"
          >
            <Notify
              active={active}
              className="xl:h-5 xl:5-w 2xl:w-6 2xl:h-6 fill-white transform transition duration-150 hover:scale-[1.05]"
            />
            <h1
              className={
                active === 6
                  ? 'text-white font-boldtext-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
                  : 'text-white font-lighttext-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
              }
            >
              Notificaciones
            </h1>
          </button>
          <button
            onClick={() => setActive(7)}
            type="button"
            className="flex flex-row items-center gap-4 hover:bg-zinc-900/80 rounded-full px-3 py-3 transform transition duration-150"
          >
            <More
              active={active}
              className="xl:h-5 xl:5-w 2xl:w-6 2xl:h-6 fill-white transform transition duration-150 hover:scale-[1.05]"
            />
            <h1
              className={
                active === 7
                  ? 'text-white font-boldtext-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
                  : 'text-white font-lighttext-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
              }
            >
              Crear
            </h1>
          </button>
          <Link
            to="/profile"
            onClick={() => setActive(8)}
            className="flex flex-row items-center gap-4 hover:bg-zinc-900/80 rounded-full px-3 py-3 transform transition duration-150"
          >
            <div className="transform transition duration-150 hover:scale-[1.05]">
              {active === 8 ? <Avatar small /> : <Avatar small />}
            </div>
            <h1
              className={
                active === 8
                  ? 'text-white font-boldtext-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
                  : 'text-white font-lighttext-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
              }
            >
              Perfil
            </h1>
          </Link>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setActive(9)}
        className="flex flex-row items-center gap-4 hover:bg-zinc-900/80 rounded-full px-3 py-3 transform transition duration-150"
      >
        <Plus className="xl:h-5 xl:5-w 2xl:w-6 2xl:h-6 fill-white transform transition duration-150 hover:scale-[1.05]" />
        <h1
          className={
            active === 9
              ? 'text-white font-boldtext-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
              : 'text-white font-lighttext-sm xl:text-[14px] 2xl:text-[16px] tracking-normal'
          }
        >
          Más
        </h1>
      </button>
    </div>
  );
}

export default Header;
