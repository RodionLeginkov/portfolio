/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { Loader } from '../../components';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

interface IWorks {
  codeLink: string;
  description: string;
  title: string;
  tags: string[];
  imgUrl: any;
}

interface IAnimate {
  y: number;
  opacity: number;
}

const Work = () => {
  const [loader, setLoader] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animatedCard, setAnimatedCard] = useState<IAnimate>({ y: 0, opacity: 1 });
  const [works, setWorks] = useState<IWorks[]>([]);
  const [filterWork, setFilterWork] = useState<IWorks[]>([]);
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimatedCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimatedCard({ y: 0, opacity: 1 });

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const getWorks = async () => {
    setLoader(true);
    const query = '*[_type == "works"]';

    const result = await client.fetch(query);
    setLoader(false);
    setWorks(result);
    setFilterWork(result);
  };

  useEffect(() => {
    getWorks();
  }, []);

  if (loader) return <Loader />;
  return (
    <>
      <h2 className='head-text'>
        My creative <span>Portfilio</span>
      </h2>
      <div className='app__work-filter'>
        {['Web App', 'Server App', 'Mobile App', 'Dapp', 'All'].map((item, index) => (
          <div
            key={index}
            role="button"
            tabIndex={index}
            onClick={() => handleWorkFilter(item)}
            className={`p-text app__work-filter-item app__flex  ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animatedCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filterWork.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className='app__work-hover app__flex'
              >
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{ marginTop: 10 }}>{work.description}</p>
              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
