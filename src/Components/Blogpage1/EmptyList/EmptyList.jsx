import React from 'react';
import './EmptyList.css';

const EmptyList = () => (
  <div className='emptyList-wrap'>
    <p>Oops! Nothing found. Please try searching again.</p>
    <img src='/assets/images/13525-empty.gif' alt='empty' />
  </div>
);

export default EmptyList;