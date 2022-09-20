import React from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import useComponentVisible from '../../hooks/useComponentVisible';
import './Navbar.scss';
import { socialLinks } from '../../constants/socialMedia';

const Navbar = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setIsComponentVisible(true)} />
        <AnimatePresence>
          {
            isComponentVisible && (
              <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <HiX onClick={() => setIsComponentVisible(false)} />
                <ul className='app__navbar-links'>
                  {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li className='app__flex p-text' key={item}>
                      <div />
                      <a href={`#${item}`} onClick={() => setIsComponentVisible(false)}>{item}</a>
                    </li>
                  ))}
                  {['Telegram', 'Vk', 'Instagram'].map((item) => (
                    <li className='app__flex p-text' key={`social+${item}`}>
                      <a href={socialLinks[item]}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setIsComponentVisible(false)}
                      >{item}</a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          }
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
