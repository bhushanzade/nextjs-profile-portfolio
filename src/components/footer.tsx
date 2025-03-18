import React, { JSX } from 'react';

const Footer = (): JSX.Element => {
  return (
    <footer
      className={` mx-auto w-full py-4 px-20 flex justify-between border-t-2 border-slate-400 text-slate-400`}>
      <p>2025 © All Rights Reserved.</p>
      <p>Created by Bhushan Zade</p>
    </footer>
  );
};

export default Footer;
