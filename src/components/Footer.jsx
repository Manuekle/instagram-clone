/* eslint-disable no-unused-vars */
import React from 'react';

function Footer() {
  const links = [
    {
      name: 'Meta',
      href: 'https://about.meta.com/',
      current: false
    },
    {
      name: 'Información',
      href: 'https://about.instagram.com/',
      current: false
    },
    {
      name: 'Blog',
      href: 'https://about.instagram.com/blog/',
      current: false
    },
    {
      name: 'Empleo',
      href: 'https://www.instagram.com/about/jobs/',
      current: false
    },
    {
      name: 'Ayuda',
      href: 'https://help.instagram.com/',
      current: false
    },
    {
      name: 'API',
      href: 'https://developers.facebook.com/docs/instagram',
      current: false
    },
    {
      name: 'Privacidad',
      href: 'https://www.instagram.com/legal/privacy/',
      current: false
    },
    {
      name: 'Condiciones',
      href: 'https://www.instagram.com/legal/terms/',
      current: false
    },
    {
      name: 'Cuentas destacadas',
      href: 'https://www.instagram.com/directory/profiles/',
      current: false
    },
    {
      name: 'Ubicaciones',
      href: 'https://www.instagram.com/explore/locations/',
      current: false
    },
    {
      name: 'Instagram Lite',
      href: 'https://www.instagram.com/web/lite/',
      current: false
    },
    {
      name: 'Subir contactos y no usuarios',
      href: 'https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fhelp%2Finstagram%2F261704639352628&e=AT1AzNM_TFE_-nRbNB0l4YLfCX9W0Du9ukOOgaHzsmK-Hdj92WZPXfd5WgjMwuTuCm8S2BL7Dt3CzEGRPKugoXc9I4uKsqckKyBelLIMPTJg1Ayh4gMslGLxSwc9LF7kWTkHdLT_0uDmyJPuBR7ZGLY-FZEVxik2HR8yzw',
      current: false
    }
  ];

  return (
    <footer className="xl:w-[60em] w-full flex flex-col gap-4">
      <div className="flex flex-row w-full gap-3 justify-center">
        {links.map((link) => (
          <a
            href={link.href}
            key={link.name}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 text-[11px] hover:underline"
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex flex-row w-full gap-3 justify-center">
        <h1 className="text-zinc-400 text-[11px]">
          © 2023 Instagram from Meta
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
