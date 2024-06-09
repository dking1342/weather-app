import {
  convertTempToRounded,
  convertToLocalTimestamp,
} from '@/lib/conversion';
import { v4 as uuidv4 } from 'uuid';
import { WeatherObject } from '@/types/api';
import { WeatherList } from '@/types/weather';
import React, { useEffect, useState } from 'react';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import { MdOutlineWaterDrop } from 'react-icons/md';
import {
  FaTemperatureArrowUp,
  FaTemperatureArrowDown,
  FaWind,
} from 'react-icons/fa6';
import styles from '../styles/WeatherBody.module.css';

type Props = {
  weather: WeatherObject;
};

const WeatherDetails = (props: Props) => {
  const [sunsetTime, setSunsetTime] = useState('');
  const [sunriseTime, setSunriseTime] = useState('');
  const [weatherList, setWeatherList] = useState<WeatherList[]>([]);

  const { weather } = props;

  useEffect(() => {
    if (weather && weather.cod !== '404') {
      const weatherOffset = weather.timezone * 1000;
      const sunsetTimestamp = weather.sys.sunset * 1000;
      const sunriseTimestamp = weather.sys.sunrise * 1000;

      const sunsetTimestring = convertToLocalTimestamp(
        weatherOffset,
        sunsetTimestamp
      );
      const sunriseTimestring = convertToLocalTimestamp(
        weatherOffset,
        sunriseTimestamp
      );
      setSunsetTime(sunsetTimestring);
      setSunriseTime(sunriseTimestring);
    }
  }, [weather]);

  useEffect(() => {
    if (weather) {
      const getWeatherList = [
        {
          id: uuidv4(),
          description: 'sunrise',
          data: sunriseTime,
          icon: <FiSunrise />,
        },
        {
          id: uuidv4(),
          description: 'sunset',
          data: sunsetTime,
          icon: <FiSunset />,
        },
        {
          id: uuidv4(),
          description: 'high',
          data: `${convertTempToRounded(weather.main.temp_max)}°C`,
          icon: <FaTemperatureArrowUp />,
        },
        {
          id: uuidv4(),
          description: 'low',
          data: `${convertTempToRounded(weather.main.temp_min)}°C`,
          icon: <FaTemperatureArrowDown />,
        },
        {
          id: uuidv4(),
          description: 'humidity',
          data: `${weather.main.humidity}%`,
          icon: <MdOutlineWaterDrop />,
        },
        {
          id: uuidv4(),
          description: 'wind',
          data: `${weather.wind.speed}m/s`,
          icon: <FaWind />,
        },
      ];
      setWeatherList(getWeatherList);
    }
  }, [weather, sunriseTime, sunsetTime]);

  if (!weather) {
    return <div></div>;
  }

  return (
    <div className={styles.weatherDetailsContainer}>
      {weatherList?.map((item) => (
        <div key={item.id} className={styles.detailsContainer}>
          {item.icon}
          <div className={styles.detailsContentContainer}>
            <p className={styles.detailsDescription}>{item.description}</p>
            <p className={styles.detailsData}>{item.data}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetails;
