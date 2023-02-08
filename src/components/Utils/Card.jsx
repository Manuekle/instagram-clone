/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Avatar from './Avatar';
import Dot from './Icons/Dot';
import Heart from './Icons/Heart';
import Comment from './Icons/Comment';
import Share from './Icons/Share';
import Save from './Icons/Save';
import Dots from './Icons/Dots';
import Emoji from './Icons/Emoji';
import Modal from './Modal';

function Card() {
  const [showMore, setShowMore] = useState(false);
  const [comment, setComment] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const image = 'https://picsum.photos/2000/2000';
  const description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde sed a iure quod quaerat est voluptatem quasi nam sequi saepe quo cumque natus quas molestiae, qui sunt harum maxime excepturi perspiciatis ratione, illo recusandae. Blanditiis ullam odio minus deleniti mollitia non aperiam maiores repudiandae, nostrum quis impedit voluptatibus placeat dolorem obcaecati molestiae, ut provident natus error enim! Totam culpa minus esse veniam harum odit facere amet ducimus explicabo, vitae id nemo dolorem perspiciatis cumque! Veritatis obcaecati sapiente mollitia suscipit reprehenderit repellat! Similique nam nisi cumque necessitatibus illo. Numquam iure praesentium laboriosam consectetur ab ut soluta inventore molestias ex a.';
  return (
    <section className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-0 items-center">
          <Avatar medium />
          <button
            type="button"
            className="text-white hover:text-white/60 text-xs font-bold pl-2"
          >
            manudev.jsx
          </button>
          <Dot className="fill-white/60 w-5 h-5 flex items-center" />
          <h1 className="text-white/60 text-xs font-extralight">1 h</h1>
        </div>
        <button type="button" onClick={() => setOpenModal(!openModal)}>
          <Dots className="fill-white hover:fill-white/60 w-6 h-6 flex items-center" />
        </button>
        {openModal && (
          <Modal setOpenModal={setOpenModal} openModal={openModal}>
            <div className="w-96 h-full bg-[#262626] rounded-lg overflow-hidden">
              <button
                type="button"
                className="w-full flex justify-center items-center border border-zinc-700/80 border-l-0 border-r-0 border-t-0 py-3 active:bg-black/20 overflow-clip"
              >
                <h1 className="text-red-500 font-bold text-sm">Reportar</h1>
              </button>
              <button
                type="button"
                className="w-full flex justify-center items-center border border-zinc-700/80 border-l-0 border-r-0 border-t-0 py-3 active:bg-black/20 overflow-clip"
              >
                <h1 className="text-red-500 font-bold text-sm">
                  Dejar de Seguir
                </h1>
              </button>
              <button
                type="button"
                className="w-full flex justify-center items-center border border-zinc-700/80 border-l-0 border-r-0 border-t-0 py-3 active:bg-black/20 overflow-clip"
              >
                <h1 className="text-white font-normal text-sm">
                  Agrergar a Favoritos
                </h1>
              </button>
              <button
                type="button"
                className="w-full flex justify-center items-center border border-zinc-700/80 border-l-0 border-r-0 border-t-0 py-3 active:bg-black/20 overflow-clip"
              >
                <h1 className="text-white font-normal text-sm">
                  Ir a la publicación
                </h1>
              </button>
              <button
                type="button"
                className="w-full flex justify-center items-center border border-zinc-700/80 border-l-0 border-r-0 border-t-0 py-3 active:bg-black/20 overflow-clip"
              >
                <h1 className="text-white font-normal text-sm">
                  Compartir en...
                </h1>
              </button>
              <button
                type="button"
                className="w-full flex justify-center items-center border border-zinc-700/80 border-l-0 border-r-0 border-t-0 py-3 active:bg-black/20 overflow-clip"
              >
                <h1 className="text-white font-normal text-sm">
                  Copiar enlace
                </h1>
              </button>
              <button
                type="button"
                className="w-full flex justify-center items-center border border-zinc-700/80 border-l-0 border-r-0 border-t-0 py-3 active:bg-black/20 overflow-clip"
              >
                <h1 className="text-white font-normal text-sm">Insertar</h1>
              </button>
              <button
                type="button"
                className="w-full flex justify-center items-center border border-zinc-700/80 border-l-0 border-r-0 border-t-0 py-3 active:bg-black/20 overflow-clip"
              >
                <h1 className="text-white font-normal text-sm">
                  Información sobre esta cuenta
                </h1>
              </button>
              <button
                type="button"
                onClick={() => setOpenModal(!openModal)}
                className="w-full flex justify-center items-center border border-zinc-700/80 border-l-0 border-r-0 border-t-0 border-b-0 py-3 active:bg-black/20 overflow-clip"
              >
                <h1 className="text-white font-normal text-sm">Cancelar</h1>
              </button>
            </div>
          </Modal>
        )}
      </div>
      <div className="border border-zinc-800 rounded-md overflow-clip">
        <figure className="w-full h-[584px] object-cover flex justify-center items-center">
          <LazyLoadImage
            effect="blur"
            src={image}
            className="w-full h-full object-center object-contain"
          />
        </figure>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-3 items-center">
          <button type="button">
            <Heart className="fill-white hover:fill-white/60 w-6 h-6 flex items-center" />
          </button>
          <button type="button">
            <Comment className="text-white hover:text-white/60 w-6 h-6 flex items-center" />
          </button>
          <button type="button">
            <Share className="text-white hover:text-white/60 w-6 h-6 flex items-center" />
          </button>
        </div>
        <button type="button">
          <Save className="text-white hover:text-white/60 w-6 h-6 flex items-center" />
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-xs font-bold">1.2k Me gusta</h1>
        <div className="text-white text-xs font-extralight justify-evenly text-justify">
          <strong className="font-bold">manudev.jsx </strong>
          {showMore ? (
            description
          ) : (
            <span>
              {description.substring(0, 30)}...
              <button
                type="button"
                onClick={() => setShowMore(!showMore)}
                className="text-zinc-400 font-bold"
              >
                {' '}
                más
              </button>
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-between items-end gap-2 pb-2 w-[28em]">
        <input
          type="text"
          onChange={(e) => setComment(e.target.value)}
          className="text-white placeholder:text-white/60 text-sm font-extralight w-full bg-black outline-none"
          placeholder="Añadir un comentario..."
        />
        <div className="flex flex-row items-center gap-2">
          {comment && (
            <button
              type="button"
              className="text-[#3797F0] text-xs hover:text-white font-bold"
            >
              Publicar
            </button>
          )}
          <Emoji className="fill-white/70 hover:fill-white/60 w-4 h-4 flex items-center" />
        </div>
      </div>
      <hr className="border-1 border-zinc-800" />
    </section>
  );
}

export default Card;
