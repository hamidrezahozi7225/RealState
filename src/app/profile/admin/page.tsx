import Requests from '@/components/models/Requests';
import AdminPage from '@/components/template/adminPage';
import ConnectDB from '@/components/utils/connectDB';
import React from 'react';

const Admin = async () => {
  await ConnectDB();
  const res = await Requests.find();
  console.log('adminnn');

  const data = res.filter((item) => item.show == false);

  return (
    <div>
      <AdminPage data={data} />
    </div>
  );
};

export default Admin;
