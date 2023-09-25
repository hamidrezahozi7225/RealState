import Headers from '@/components/layout/headers';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import ProfilePage from '@/components/template/profilePage';
import ConnectDB from '@/components/utils/connectDB';
import User from '@/components/models/User';
import { redirect } from 'next/navigation';

const Profile = async () => {
  const session: any = await getServerSession(authOptions);

  if (!session) redirect('/');
  const email = session?.user?.email;

  await ConnectDB();
  const user = await User.findOne({ email });

  return (
    <div>
      <ProfilePage user={user} />
    </div>
  );
};

export default Profile;
