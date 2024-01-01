import React from 'react';
import ThemeContext from '../contexts/ThemeContext';

function Loading() {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className='loader-container'>
      <img src={theme === 'dark' ? '/images/loaderr.gif' : '/images/loaderr.gif'} className='loader' />
    </div>
  );
}

export default Loading;
