import React, { useEffect, useState } from 'react';
import WeatherChart from './WeatherChart';
import { getWeatherForcast } from '@/lib/api';
import { testForecastData } from '../data/testForecastData';
import styles from '../styles/WeatherBody.module.css';
import WeatherExtendedForecast from './WeatherExtendedForecast';
import { ChartDescription } from '@/types/weather';
import WeatherChartButton from './WeatherChartButton';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  lat: number | null;
  lon: number | null;
};

const WeatherForecast = (props: Props) => {
  const { lat, lon } = props;
  const [forecast, setForecast] = useState(null);
  const [chartDescription, setChartDescription] = useState<
    ChartDescription | string
  >('temp');

  const buttonList = [
    {
      id: uuidv4(),
      name: 'temp',
      description: 'Temperature',
    },
    {
      id: uuidv4(),
      name: 'feels_like',
      description: 'Feels Like',
    },
    {
      id: uuidv4(),
      name: 'speed',
      description: 'Wind',
    },
    {
      id: uuidv4(),
      name: 'humidity',
      description: 'Humidity',
    },
    {
      id: uuidv4(),
      name: 'pressure',
      description: 'Pressure',
    },
  ];

  const handleForecast = async (lat: number, lon: number) => {
    const data = await getWeatherForcast(lat, lon);
    // const data = testForecastData;
    setForecast(data.list);
  };

  useEffect(() => {
    if (lat && lon) {
      handleForecast(lat, lon);
    }
  }, [lat, lon]);

  if (forecast) {
    return (
      <div className={styles.weatherForecastContainer}>
        <div className={styles.weatherButtonsContainer}>
          {buttonList.map((btn) => (
            <WeatherChartButton
              key={btn.id}
              name={btn.name}
              setState={setChartDescription}
              description={btn.description}
              chartDescription={chartDescription}
            />
          ))}
        </div>
        <WeatherChart forecast={forecast} chartDescription={chartDescription} />
        <WeatherExtendedForecast
          forecast={forecast}
          chartDescription={chartDescription}
        />
      </div>
    );
  }

  return <div></div>;
};

export default WeatherForecast;
