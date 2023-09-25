import React from 'react';

const ProfilePage = ({ user }: users | null | any) => {
  console.log('user', user);
  let date: any = new Date(user.createdAt);
  let date2 = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  return (
    <div className='mx-4 mt-3 text-cyan-600'>
      <h1>
        <span className='font-extrabold text-black'>email</span> : {user.email}
      </h1>
      <h3>
        <span className='font-extrabold text-black'>role</span> : {user.role}
      </h3>
      <div className='mt-16'>
        <p className='text-black font-extrabold'>
          Registery Date:{' '}
          <span className='text-cyan-600 font-medium'>{date2}</span>
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;

interface users {
  _id: {};
  email: string;
  password: string;
  post: [];
  role: string;
  createdAt: string;
}
