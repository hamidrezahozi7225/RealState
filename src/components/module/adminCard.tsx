'use client';

import {
  MdSubtitles,
  MdRealEstateAgent,
  MdPriceChange,
  MdDescription,
} from 'react-icons/md';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { HiLocationMarker } from 'react-icons/hi';
import { AiFillPhone } from 'react-icons/ai';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';

const AdminCard = ({ datas }) => {
  const router = useRouter();
  const {
    title,
    description,
    location,
    phone,
    price,
    realState,
    constructionDate,
    category,
    _id,
  } = datas;
  let date: any = new Date(constructionDate);
  let date2 = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

  const sendHandler = async (id) => {
    const res = await fetch(`/api/profile/request/admin/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'aplicatopn/json' },
    });
    if (res.status == 200) {
      toast.success('Send Success');
      router.refresh();
    } else {
      toast.error('Send Failed!');
    }
  };

  return (
    <div className='bg-blue-800 mx-3 w-96 text-white rounded-xl mb-3'>
      <div className='flex justify-between '>
        <div className='bg-slate-300 text-black pr-16 pl-16 rounded-e-xl p-5 '>
          <h1 className='flex items-center mb-1 font-bold text-xl'>
            <MdSubtitles />
            {title}
          </h1>
          <h1 className='flex items-center mb-1'>
            <BiSolidCategoryAlt />
            {category}
          </h1>
          <h1 className='flex items-center mb-1'>
            <HiLocationMarker />
            {location}
          </h1>
        </div>
        <div className='p-5 pr-16'>
          <h1 className='flex items-center mb-1'>
            <AiFillPhone />
            {phone}
          </h1>
          <h1 className='flex items-center mb-1'>
            <MdRealEstateAgent />
            {realState}
          </h1>
          <h1 className='flex items-center mb-1'>
            <MdPriceChange />
            {price}
          </h1>
        </div>
      </div>

      <div className=' py-5 px-16'>
        <h1 className='flex items-center mb-1'>
          <BsFillCalendarDateFill /> {'  '}
          {date2}
        </h1>
        <h1 className='flex items-start font-thin text-sm mb-3 h-10'>
          <MdDescription style={{ fontSize: '25px' }} />
          {description}
        </h1>
      </div>
      <div className='rounded-b-lg bottom-0'>
        <button
          onClick={() => sendHandler(_id)}
          className='w-full rounded-b-lg bottom-0 bg-gray-950 py-3 px-5 text-white hover:bg-gray-700'
        >
          Send
        </button>
      </div>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  );
};

export default AdminCard;
