'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import Card from '../module/card';

const AllAdvertisementsPage = ({ data }) => {
  const router = useRouter();
  const refreshHandler = (title) => {
    router.push(`/Advertisements?category=${title}`);
    router.refresh();
  };
  return (
    <div className='flex w-8/12 mx-auto'>
      <div className='bg-white pt-3 pl-2 pr-10 pb-4 rounded-xl h-fit '>
        <ul className='list-disc p-3'>
          <li className='m-1 font-bold hover:text-sky-600 '>
            <button onClick={() => refreshHandler('')}>All</button>
          </li>
          <li className='m-1 font-bold hover:text-sky-600 '>
            <button onClick={() => refreshHandler('home')}>Home</button>
          </li>
          <li className='m-1 font-bold hover:text-sky-600'>
            <button onClick={() => refreshHandler('village')}>Village</button>
          </li>
          <li className='m-1 font-bold hover:text-sky-600'>
            <button onClick={() => refreshHandler('apartment')}>
              Apartment
            </button>
          </li>
          <li className='m-1 font-bold hover:text-sky-600'>
            <button onClick={() => refreshHandler('store')}>Store</button>
          </li>
        </ul>
      </div>
      <div className='flex flex-wrap'>
        {data.map((itm) => (
          <Card
            title={itm.title}
            price={itm.price}
            category={itm.category}
            location={itm.location}
            show={true}
            key={itm._id}
            id={itm._id}
          />
        ))}
      </div>
    </div>
  );
};

export default AllAdvertisementsPage;
