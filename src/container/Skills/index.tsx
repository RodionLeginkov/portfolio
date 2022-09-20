import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

interface ISkills {
  bgColor: string;
  description: string;
  name?: string;
  tags: string[];
  icon: any;
}

type IWorks = {
  name: string;
  company: string;
  desc: string;
};

interface IExperience {
  id: number;
  year: string;
  works: IWorks[];
}

const Skills = () => {
  const [skills, setSkills] = useState<ISkills[]>([]);
  const [experiences, setExperiences] = useState<IExperience[]>([]);

  const getExperiences = async () => {
    const query = '*[_type == "experiences"]';
    const result = await client.fetch(query);
    setExperiences(result.sort((a: IExperience, b: IExperience) => a.id - b.id));
  };

  const getSkills = async () => {
    const query = '*[_type == "skills"]';
    const result = await client.fetch(query);

    setSkills(result);
  };

  const getInfo = () => {
    getSkills();
    getExperiences();
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className='app__skills-container'>
        <motion.div
          className='app__skills-list'
        >
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={`${index}+${skill.name}`}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt='icon' />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className='app__skills-exp'
        >
          {
            experiences.map((experience, index) => (
              <motion.div
                className='app__skills-exp-item'
                key={`${index}+${experience.year}`}
              >
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{experience.year}</p>
                </div>
                <motion.div
                  className='app__skills-exp-works'
                >
                  {experience.works.map((work, ind) => (
                    <React.Fragment key={`${ind}+${work.name}`}>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className='app__skills-exp-work'
                        data-tip
                        data-for={work.name}

                      >
                        <h4 className='bold-text'>{work.name}</h4>
                        <p className='p-text'>{work.company}</p>
                      </motion.div>
                      <ReactTooltip
                        id={work.name}
                        effect='solid'
                        arrowColor='#fff'
                        className='skills-tolltip'
                      >
                        {work.desc}
                      </ReactTooltip>
                    </React.Fragment>
                  ))}
                </motion.div>
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
