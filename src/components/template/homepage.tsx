import { FiCircle } from 'react-icons/fi';
import { FaCity } from 'react-icons/fa';
import { categories, cities, services } from '../constant/strings';
import styles from './homepage.module.css';
import CategoryCard from '../module/CategoryCard';

function HomePage() {
  const categoryArr = Object.keys(categories);
  console.log('categories', categoryArr);

  return (
    <div className='px-60'>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>Property Purchase And Rental System</h1>
          <ul>
            {services.map((i) => (
              <li key={i}>
                <FiCircle style={{ marginTop: '3px' }} />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        {categoryArr?.map((i) => (
          <CategoryCard title={categories[i]} name={i} />
        ))}
      </div>
      <div className={styles.city}>
        <h3>شهر های پر بازدید</h3>
        <ul>
          {cities.map((i) => (
            <li key={i}>
              <FaCity />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
