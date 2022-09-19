import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

interface IAbout {
  title: string;
  description: string;
  imgUrl: any;
}

const About = () => {
  const [abouts, setAbouts] = useState<IAbout[]>([]);

  const getAbouts = async () => {
    const query = '*[_type == "abouts"]';
    const result = await client.fetch(query);
    setAbouts(result);
  };

  useEffect(() => {
    getAbouts();
  }, []);

  return (
    <>
      <h2 className='head-text'>
        I Know that <span>Good Development</span><br />means<span> Good Business</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <h2 className='p-text' style={{ marginTop: 10 }}>{about.description}</h2>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
