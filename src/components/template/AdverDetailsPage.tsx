import React from 'react';
import { SiHomebridge } from 'react-icons/si';
import { AiOutlinePhone } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiCalendarCheck } from 'react-icons/bi';
import { e2p, sp } from '../utils/helper';
import ItemList from '../module/ItemList';
import ShareButton from '../module/ShareButton';
import { icons } from '../constant/icons';
import { categories } from '../constant/strings';
import styles from './AdverDetailsPage.module.css';

const AdverDetailsPage = ({ data }) => {
  console.log(data);

  const {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  } = data;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>
        <h3>Description</h3>
        <p>{description}</p>
        <h3>Amenities</h3>
        <ItemList data={amenities} />
        <h3>Rules</h3>
        <ItemList data={rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>RealState {realState}</p>
          <span>
            <AiOutlinePhone />
            {phone}
          </span>
        </div>
        <div className={styles.price}>
          <p>
            {icons[category]}
            {categories[category]}
          </p>
          <p>{price} $</p>
          <p>
            <BiCalendarCheck />
            {new Date(constructionDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdverDetailsPage;
