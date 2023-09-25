'use client';

import React, { useState } from 'react';

const RadioList = ({ profileData, setProfileData }) => {
  const [radio, setRadio] = useState('home');
  const changeHandler = (e) => {
    setRadio(e.target.value);
    setProfileData({ ...profileData, category: e.target.value });
  };
  return (
    <>
      <h1 className='font-bold mx-6 text-2xl mb-3'>Category</h1>

      <div className='flex ml-2'>
        <div className='mx-3 bg-cyan-300 p-2 rounded-lg hover:bg-cyan-500'>
          <label htmlFor='home'>Home</label>
          <input
            onChange={changeHandler}
            type='radio'
            id='home'
            value='home'
            checked={radio === 'home'}
            className='mx-1'
          />
        </div>
        <div className='mx-3 bg-cyan-300 p-2 rounded-lg hover:bg-cyan-500'>
          <label htmlFor='village'>village</label>
          <input
            onChange={changeHandler}
            type='radio'
            id='village'
            value='village'
            checked={radio === 'village'}
            className='mx-1'
          />
        </div>
        <div className='mx-3 bg-cyan-300 p-2 rounded-lg hover:bg-cyan-500'>
          <label htmlFor='apartment'>apartment</label>
          <input
            onChange={changeHandler}
            type='radio'
            id='apartment'
            value='apartment'
            checked={radio === 'apartment'}
            className='mx-1'
          />
        </div>
        <div className='mx-3 bg-cyan-300 p-2 rounded-lg hover:bg-cyan-500'>
          <label htmlFor='store'>store</label>
          <input
            onChange={changeHandler}
            type='radio'
            id='store'
            value='store'
            checked={radio === 'store'}
            className='mx-1'
          />
        </div>
      </div>
    </>
  );
};

export default RadioList;
