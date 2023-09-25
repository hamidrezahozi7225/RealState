import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

const TextList = ({ title, profileData, setProfileData, type }) => {
  const clickHandler = () => {
    setProfileData({ ...profileData, type: profileData[type].push('') });
    console.log('pp', profileData);
  };
  const changeHandler = (e: any, index: number, type: string) => {
    profileData[type][index] = e.target.value;

    setProfileData({
      ...profileData,
    });
  };

  const deleteHandler = (item, index, type) => {
    profileData[type].splice(index, 1);

    setProfileData({
      ...profileData,
    });
  };
  return (
    <div className='ml-6'>
      <h1 className='font-bold  mt-6 text-2xl mb-3'>{title}</h1>
      {profileData[type].map((item: any, index: number) => (
        <div key={index} className='w-full mb-2'>
          <input
            type='text'
            value={item}
            onChange={(e) => changeHandler(e, index, type)}
            className='p-2 rounded-lg '
          />
          <button
            className='mx-2 bg-slate-500 p-2 rounded-lg text-white'
            onClick={() => deleteHandler(item, index, type)}
          >
            <span className='flex items-center '>
              delete <BsFillTrashFill />
            </span>
          </button>
        </div>
      ))}
      <button
        onClick={clickHandler}
        className='bg-blue-700 px-4 text-white py-2 rounded-lg'
      >
        add
      </button>
    </div>
  );
};

export default TextList;
