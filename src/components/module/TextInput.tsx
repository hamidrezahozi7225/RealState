import React from 'react';
import styles from './TextInput.module.css';

const TextInput = ({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) => {
  const changeHandler = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {textarea ? (
        <textarea
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          type='text'
          name={name}
          value={profileData[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
};

export default TextInput;
