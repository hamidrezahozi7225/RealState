'use client';

import React, { useEffect, useState } from 'react';
import UserAdvertisements from '../module/userAdvertisements';

const AdvertisementsPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('/api/profile')
      .then((res) => res.json())
      .then((data) => setPosts(data.post));
  }, []);
  return (
    <div className='flex flex-wrap mx-12'>
      {posts.length > 0
        ? posts.map((item, index) => (
            <UserAdvertisements
              post={...item}
              setPosts={setPosts}
              key={index}
            />
          ))
        : "you don't have Advertisements"}
    </div>
  );
};

export default AdvertisementsPage;
