import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import { icons } from '../constant/icons';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Card = ({ title, price, category, location, show, id }) => {
  return (
    <div className=' m-2 rounded-xl border-2 p-3 pr-10 border-blue-700'>
      <h1 className='font-extrabold text-3xl'>{icons[category]}</h1>
      <h1 className='mb-2 font-bold'>{title}</h1>
      <h1 className='mb-2'>
        <span className='flex items-center'>
          <HiLocationMarker />
          {location}
        </span>
      </h1>
      <span className='font-light text-xs'>{price}$</span>
      {show && (
        <Link href={`/Advertisements/${id}`}>
          <h1 className='text-white p-2 rounded-xl text-sm font-bold mt-3 flex items-center bg-zinc-500'>
            See Details <AiOutlineArrowRight />
          </h1>
        </Link>
      )}
    </div>
  );
};

export default Card;
