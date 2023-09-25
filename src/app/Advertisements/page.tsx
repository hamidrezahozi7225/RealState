import Headers from '@/components/layout/headers';
import Requests from '@/components/models/Requests';
import ConnectDB from '@/components/utils/connectDB';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import AllAdvertisementsPage from '@/components/template/allAdvertisementsPage';

const Advertisements = async ({ params, searchParams }) => {
  await ConnectDB();
  const session = await getServerSession(authOptions);
  const request = await Requests.find();
  const res = request.filter((item) => item.show);
  let data = res;
  if (searchParams?.category) {
    data = data.filter((itm) => itm.category == searchParams.category);
  }
  console.log('dataaa', data);

  return (
    <div>
      <Headers session={session} />
      <AllAdvertisementsPage data={data} />
    </div>
  );
};

export default Advertisements;
