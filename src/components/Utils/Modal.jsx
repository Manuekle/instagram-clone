/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React from 'react';

import { motion } from 'framer-motion';

function Modal({ setOpenModal, openModal, children }) {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section
      className="flex fixed z-50 top-0 left-0 w-screen h-screen bg-black/60 justify-center items-center overflow-hidden"
      onClick={() => setOpenModal(!openModal)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div onClick={handleClick}>{children}</div>
      </motion.div>
    </section>
  );
}

export default Modal;
