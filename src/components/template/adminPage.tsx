import React from 'react';
import AdminCard from '../module/adminCard';

const AdminPage = ({ data }) => {
  console.log('datacddc', data);

  return (
    <div className='flex flex-wrap'>
      {data.map((item) => (
        <AdminCard key={item._id} datas={item} />
      ))}
    </div>
  );
};

export default AdminPage;
