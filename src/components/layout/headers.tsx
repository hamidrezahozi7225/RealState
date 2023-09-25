'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BiSolidUser } from 'react-icons/bi';

const Headers = ({ session }: any) => {
  const router = useRouter();
  const profileHandler = () => {
    router.push('/profile');
  };

  return (
    <header className='flex justify-between bg-blue-800 text-white p-6 mt-10 mb-12 w-8/12 mx-auto rounded-lg items-center'>
      <div>
        <ul className='flex'>
          <li className='mx-3 hover:text-rose-600'>
            <Link href='/'>Home</Link>
          </li>
          <li className='mx-3 hover:text-rose-600'>
            <Link href='/Advertisements'>Advertisements</Link>
          </li>
        </ul>
      </div>
      <div>
        {session ? (
          <div
            className='text-2xl cursor-pointer hover:text-rose-600'
            onClick={profileHandler}
          >
            <BiSolidUser />
          </div>
        ) : (
          <div className='cursor-pointer hover:text-rose-600'>
            <Link href='/login'>login</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Headers;
