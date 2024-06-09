import {
  convertTempToRounded,
  convertToLocalTimestamp,
} from '@/lib/conversion';
import { WeatherObject } from '@/types/api';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '../styles/WeatherBody.module.css';
import ErrorPage from './ErrorPage';

type Props = {
  weather: WeatherObject;
};

const WeatherDisplay = (props: Props) => {
  const [timestamp, setTimestamp] = useState('');
  const { weather } = props;

  useEffect(() => {
    if (weather) {
      const weatherOffset = weather.timezone * 1000;
      const localTimestring = convertToLocalTimestamp(weatherOffset);
      setTimestamp(localTimestring);
    }
  }, [weather]);

  if (!weather) {
    return <div></div>;
  }

  return (
    <div className={styles.weatherDisplayContainer}>
      <div className={styles.weatherDisplayContainerLeft}>
        <div className={styles.descriptionContainer}>
          <Image
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            width={100}
            height={100}
            alt="weather icon"
          ></Image>
        </div>
        <p className={styles.temp}>
          {convertTempToRounded(weather.main.temp)}°C
        </p>
        <p className={styles.location}>
          {weather.name}, {weather.sys.country}
        </p>
      </div>
      <div className={styles.weatherDisplayContainerRight}>
        <p className={styles.time}>Time</p>
        <p className={styles.timestamp}>{timestamp}</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
