import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Headers from '@/components/layout/headers';
import Requests from '@/components/models/Requests';
import AdverDetailsPage from '@/components/template/AdverDetailsPage';
import ConnectDB from '@/components/utils/connectDB';
import { getServerSession } from 'next-auth';
import React from 'react';

const AdverDetails = async ({ params }) => {
  const session = await getServerSession(authOptions);

  const { adverId } = params;

  await ConnectDB();
  const data = await Requests.findById({ _id: adverId });

  return (
    <div>
      <Headers session={session} />
      <AdverDetailsPage data={data} />
    </div>
  );
};

export default AdverDetails;
