'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Input, Space } from 'antd';
import { validatePassword, validateEmail } from '../utils/helper';
import { toast, Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signUpHandler = async () => {
    const validEmail = validateEmail(email);
    const validpassword = validatePassword(password);

    if (!validEmail) {
      toast.error('your email is not correct');
      return;
    }
    if (!validpassword.valid) {
      toast.error(validpassword.message);
      return;
    }

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (res.status !== 201) {
      toast.error(data.message);
    } else {
      toast.success(data.message);
      router.push('/login');
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
            // style={{ width: '300px', height: '300px' }}
          />
        </div>
        <div className='w-full text-center  align-bottom mt-auto mb-auto'>
          <h1 className='font-extrabold text-2xl mb-5'>Sign-Up</h1>
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
                href='/login'
                className='text-blue-600 border-b-2 border-blue-600'
              >
                Sign-In
              </Link>
            </span>
          </div>
          <div className=' w-8/12 ml-auto mr-auto'>
            <button
              onClick={signUpHandler}
              className='bg-red-600 w-full text-white p-4 rounded-lg'
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
};

export default SignUpPage;
