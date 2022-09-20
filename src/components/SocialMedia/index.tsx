import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaVk, FaTelegram } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href='https://t.me/Rodion_Le' target="_blank" rel="noreferrer">
        <FaTelegram />
      </a>
      <a href='https://vk.com/id49703796' target="_blank" rel="noreferrer">
        <FaVk />
      </a>
      <a href='https://www.instagram.com/rodion_leginkov' target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default SocialMedia;
