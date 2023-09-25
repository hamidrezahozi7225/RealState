import React from 'react';
import DatePicker from 'react-multi-date-picker';

const DatePickers = ({ profileData, setProfileData }) => {
  const handleDateChange = (value) => {
    const newDate = new Date(value);
    setProfileData({ ...profileData, constructionDate: newDate });
  };
  return (
    <div className='my-4 mx-14'>
      <h1 className='font-bold text-2xl'>Date</h1>
      <DatePicker
        value={profileData.constructionDate}
        onChange={(date) => handleDateChange(date)}
        style={{
          padding: '20px 10px',
          border: '1px #304ffe dashed',
          borderRadius: '5px',
        }}
      />
    </div>
  );
};

export default DatePickers;
