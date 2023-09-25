import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SignUpPage from '@/components/template/signupPage';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const Signup = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect('/');
  return (
    <div>
      <SignUpPage />
    </div>
  );
};

export default Signup;
