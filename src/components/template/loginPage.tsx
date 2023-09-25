'use client';

import { Input } from 'antd';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginHandler = async () => {
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success('login success');
      router.push('/');
      router.refresh();
    }
  };

  return (
    <div className='signup w-10/12'>
      <div className='m-3 rounded-lg flex justify-between align-bottom bg-white w-full'>
        <div>
          <Image
            src='/images/realestate.jpg'
            alt='real estate'
            width='830'
            height='600'
            className='rounded-l-lg '
          />
        </div>
        <div className='w-full text-center  align-bottom mt-auto mb-auto'>
          <h1 className='font-extrabold text-2xl mb-5'>Login</h1>
          <div className='w-8/12  text-left ml-auto mr-auto'>
            <div className='flex-nowrap'>
              <Input
                className='border w-full p-4 mb-3 rounded-xl'
                placeholder='enter email '
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input.Password
                className='border w-full p-4 rounded-xl mb-4'
                placeholder='enter password '
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='ml-auto mr-auto mb-8 text-right  w-8/12 '>
            <span className=''>
              Already a member?{' '}
              <Link
                href='/signup'
                className='text-blue-600 border-b-2 border-blue-600'
              >
                Sign-Up
              </Link>
            </span>
          </div>
          <div className=' w-8/12 ml-auto mr-auto'>
            <button
              onClick={loginHandler}
              className='bg-red-600 w-full text-white p-4 rounded-lg'
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
};

export default LoginPage;
