import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import Headers from '@/components/layout/headers';
import Homepage from '@/components/template/homepage';

async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Headers session={session} />
      <Homepage />
    </>
  );
}
export default Home;
