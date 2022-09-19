/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

interface INavigationDots {
  active?: string;
}

const NavigationDots = (props: INavigationDots) => {
  const { active } = props;
  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
        <a
          key={item + index}
          href={`#${item}`}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: '313BAC' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
