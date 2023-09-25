'use client';
import React, { useEffect, useState } from 'react';
import TextInput from '../module/TextInput';
import styles from './addPage.module.css';
import RadioList from '../module/RadioList';
import TextList from '../module/TextList';
import DatePickers from '../module/datePicker';
import { toast, Toaster } from 'react-hot-toast';

const AddPage = ({ data }) => {
  const [profileData, setProfileData] = useState({
    title: '',
    description: '',
    location: '',
    phone: '',
    price: '',
    realState: '',
    constructionDate: new Date(),
    category: 'home',
    rules: [''],
    amenities: [''],
  });

  useEffect(() => {
    if (data) {
      console.log('dd', data);

      setProfileData(data);
    }
  }, []);
  const submitHandler = async () => {
    console.log('cc', profileData);
    if (!data) {
      const res = await fetch('/api/profile/request', {
        method: 'POST',
        body: JSON.stringify({ profileData }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status == 201) {
        toast.success('Submit Success');
      } else {
        toast.error('Submit Error');
      }
    } else {
      const res = await fetch(`/api/profile/request/${data._id}`, {
        method: 'PATCH',
        body: JSON.stringify({ profileData }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.status == 200) {
        toast.success('Submit Success');
      } else {
        toast.error('Submit Error');
      }
    }
  };
  return (
    <>
      <div className={styles.container}>
        <TextInput
          title='Title'
          name='title'
          profileData={profileData}
          setProfileData={setProfileData}
        />
        <TextInput
          title='Description'
          name='description'
          profileData={profileData}
          setProfileData={setProfileData}
          textarea={true}
        />
        <TextInput
          title='Location'
          name='location'
          profileData={profileData}
          setProfileData={setProfileData}
        />
        <TextInput
          title='Phone'
          name='phone'
          profileData={profileData}
          setProfileData={setProfileData}
        />
        <TextInput
          title='Price'
          name='price'
          profileData={profileData}
          setProfileData={setProfileData}
        />
        <TextInput
          title='RealState'
          name='realState'
          profileData={profileData}
          setProfileData={setProfileData}
        />
      </div>
      <div className={styles.radio}>
        <RadioList profileData={profileData} setProfileData={setProfileData} />
        <TextList
          title='Amenities'
          profileData={profileData}
          setProfileData={setProfileData}
          type='amenities'
        />
        <TextList
          title='Rules'
          profileData={profileData}
          setProfileData={setProfileData}
          type='rules'
        />
      </div>
      <DatePickers profileData={profileData} setProfileData={setProfileData} />
      <div className='m-5'>
        <button
          onClick={submitHandler}
          className='bg-blue-800 text-white px-8 py-2 rounded-2xl font-extrabold text-lg'
        >
          Submit
        </button>

        <Toaster position='top-center' reverseOrder={false} />
      </div>
    </>
  );
};

export default AddPage;
