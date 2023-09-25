import React from 'react';
import Card from './card';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';

const UserAdvertisements = ({ post, setPosts }) => {
  const router = useRouter();
  const { title, price, category, location, _id, show } = post;

  const deleteHandler = async (id: string) => {
    const req = await fetch(`/api/profile/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'aplication/json' },
    });
    if (req.status === 200) {
      toast.success('Delete Success');
      fetch('/api/profile')
        .then((res) => res.json())
        .then((data) => setPosts(data.post));
    } else {
      toast.error('Delete Failed!');
    }
  };

  const updateHandler = (id: string) => {
    router.push(`/profile/add/${id}`);
  };
  return (
    <div className='flex mx-2 w-96 p-3 mb-3 relative rounded-xl border-2  border-x-blue-700'>
      <div>
        <Card
          title={title}
          price={price}
          category={category}
          location={location}
          show={false}
          id={_id}
        />
      </div>
      <div className='self-end mb-2 flex'>
        <div className='absolute top-2 right-2 bg-lime-500 rounded-full p-2'>
          {show ? 'Done' : 'Pendding'}
        </div>
        <button
          onClick={() => updateHandler(_id)}
          className='bg-yellow-400 py-2 px-6 mx-1 rounded-3xl'
        >
          Update
        </button>
        <button
          className='bg-rose-600 py-2 px-6 rounded-3xl text-white'
          onClick={() => deleteHandler(_id)}
        >
          Delete
        </button>
      </div>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
};

export default UserAdvertisements;
