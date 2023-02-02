/* eslint-disable no-unused-vars */
import React from 'react';
import Dot from './Icons/Dot';

function MoreInfo() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-row items-center gap-x-0 gap-y-1 w-full">
        <span>
          <h1 className="text-white/60 text-[11px] font-extralight">
            Información
          </h1>
        </span>
        <Dot className="fill-white/80 h-[10px] w-[10px]" />
        <span>
          <h1 className="text-white/60 text-[11px] font-extralight">Ayuda</h1>
        </span>
        <Dot className="fill-white/80 h-[10px] w-[10px]" />
        <span>
          <h1 className="text-white/60 text-[11px] font-extralight">Prensa</h1>
        </span>
        <Dot className="fill-white/80 h-[10px] w-[10px]" />
        <span>
          <h1 className="text-white/60 text-[11px] font-extralight">API</h1>
        </span>
        <Dot className="fill-white/80 h-[10px] w-[10px]" />
        <span>
          <h1 className="text-white/60 text-[11px] font-extralight">Empleo</h1>
        </span>
        <Dot className="fill-white/80 h-[10px] w-[10px]" />
        <span>
          <h1 className="text-white/60 text-[11px] font-extralight">
            Privacidad
          </h1>
        </span>
        <Dot className="fill-white/80 h-[10px] w-[10px]" />
      </div>
      <div className="flex flex-row items-center gap-x-0 gap-y-1 w-full">
        <span>
          <h1 className="text-white/60 text-[11px] font-extralight">
            Condiciones
          </h1>
        </span>
        <Dot className="fill-white/80 h-[10px] w-[10px]" />
        <span>
          <h1 className="text-white/60 text-[11px] font-extralight">
            Ubicaciones
          </h1>
        </span>
        <Dot className="fill-white/80 h-[10px] w-[10px]" />
        <span>
          <h1 className="text-white/60 text-[11px] font-extralight">Idioma</h1>
        </span>
      </div>
      <div className="pt-5">
        <h1 className="text-white/60 text-[12px] font-extralight">
          © 2023 INSTAGRAM FROM META
        </h1>
      </div>
      <div className="pt-5">
        <h1 className="text-white/60 text-[12px] font-extralight">
          Nota : Este clon se ha realizado solo con fines educativos. No se
          pretende derechos de autor.
        </h1>
      </div>
    </section>
  );
}

export default MoreInfo;
