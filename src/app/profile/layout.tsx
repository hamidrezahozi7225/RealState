import Headers from '@/components/layout/headers';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Link from 'next/link';
import ConnectDB from '@/components/utils/connectDB';
import User from '@/components/models/User';

const ProfileLayout = async ({ children }) => {
  const session: any = await getServerSession(authOptions);

  const email = session.user.email;

  await ConnectDB();
  const user = await User.findOne({ email });

  return (
    <>
      <Headers session={session} />
      <div className='flex w-8/12 mx-auto '>
        <div className='bg-white pt-3 pl-2 pr-10 pb-4 rounded-xl h-fit '>
          <h1 className='mb-3'>
            HI <span className='font-bold'> {email}</span>
          </h1>
          <ul className='list-disc p-3'>
            <li className='m-1 font-bold hover:text-sky-600'>
              <Link href='/profile'>profile</Link>
            </li>
            <li className='m-1 font-bold hover:text-sky-600'>
              <Link href='/profile/Advertisements'>my-Adver</Link>
            </li>
            <li className='m-1 font-bold hover:text-sky-600'>
              <Link href='/profile/add'>Add</Link>
            </li>
            {user.role === 'ADMIN' && (
              <li className='m-1 font-bold hover:text-sky-600'>
                <Link href='/profile/admin'>Admin</Link>
              </li>
            )}
          </ul>
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default ProfileLayout;
