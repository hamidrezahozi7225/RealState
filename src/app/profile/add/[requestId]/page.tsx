import Requests from '@/components/models/Requests';
import AddPage from '@/components/template/addPage';
import ConnectDB from '@/components/utils/connectDB';
import React, { useEffect } from 'react';

const Update = async ({ params: requestId }) => {
  await ConnectDB();

  const data = await Requests.findOne({ _id: requestId.requestId });
  console.log('kkk', data);

  return (
    <div>
      <AddPage data={data} />
    </div>
  );
};

export default Update;
