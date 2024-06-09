import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { FaSearch } from 'react-icons/fa';

type Props = {
  onSearch: (city: string) => void;
};

const SearchForm = (props: Props) => {
  const { onSearch } = props;
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSearch(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchForm;
