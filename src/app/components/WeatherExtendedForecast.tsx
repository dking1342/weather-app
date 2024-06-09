import { convertTempToRounded } from '@/lib/conversion';
import { WeatherForecastList } from '@/types/api';
import { ChartDescription } from '@/types/weather';
import React, { useCallback, useEffect, useState } from 'react';
import { FaTemperatureFull, FaWind } from 'react-icons/fa6';
import { WiBarometer, WiHumidity } from 'react-icons/wi';
import styles from '../styles/WeatherBody.module.css';

type Props = {
  forecast: WeatherForecastList[] | null;
  chartDescription: string;
};

type WeatherObject = {
  [key: string]: any;
};

type GroupedItem = {
  date: string;
  data: number[];
  high: number;
  low: number;
};

const WeatherExtendedForecast = (props: Props) => {
  const { forecast, chartDescription } = props;
  const [forecastData, setForecastData] = useState<GroupedItem[]>([]);

  const forecastIcons = [
    {
      name: 'temp',
      icon: <FaTemperatureFull />,
      output: '°',
    },
    {
      name: 'feels_like',
      icon: <FaTemperatureFull />,
      output: '°',
    },
    {
      name: 'pressure',
      icon: <WiBarometer />,
      output: 'hPa',
    },
    {
      name: 'humidity',
      icon: <WiHumidity />,
      output: '%',
    },
    {
      name: 'speed',
      icon: <FaWind />,
      output: 'm/s',
    },
  ];

  const findValueByKey = useCallback(
    (obj: WeatherObject, keyToFind: string): any | null => {
      if (typeof obj !== 'object' || obj === null) {
        return null;
      }

      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (key === keyToFind) {
            return obj[key];
          }

          const value = findValueByKey(obj[key], keyToFind);
          if (value !== null) {
            return value;
          }
        }
      }

      return null;
    },
    []
  );

  const getForecastData = useCallback(() => {
    if (forecast && chartDescription) {
      const forecastList = forecast
        .map((obj) => {
          const modifiedObject: WeatherObject = obj;
          const data = findValueByKey(modifiedObject, chartDescription);
          return {
            date: obj.dt_txt,
            [chartDescription]: data,
          };
        })
        .reduce((acc: any, val) => {
          const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ];
          const currentDay = days[new Date(val.date).getDay()];
          if (!acc[currentDay]) {
            acc[currentDay] = {
              date: currentDay,
              data: [],
              high: 0,
              low: 0,
            };
          }
          acc[currentDay].data.push(val[chartDescription]);
          let currentHigh = convertTempToRounded(
            Math.max(...acc[currentDay].data)
          );
          let currentLow = convertTempToRounded(
            Math.min(...acc[currentDay].data)
          );
          acc[currentDay].high = currentHigh;
          acc[currentDay].low = currentLow;

          return acc;
        }, {} as Record<string, GroupedItem>);

      return Object.values(forecastList) as GroupedItem[];
    }
  }, [chartDescription, findValueByKey, forecast]);

  useEffect(() => {
    let data = getForecastData();
    if (data) {
      setForecastData(data);
    }
  }, [chartDescription, getForecastData]);

  return (
    <div className={styles.weatherExtendedContainer}>
      {JSON.parse(JSON.stringify(forecastData)).map((item: any) => (
        <div key={item.date} className={styles.weatherExtendedCard}>
          <h1 className={styles.weatherExtendedCardHeader}>{item.date}</h1>
          <div className={styles.weatherExtendedCardBody}>
            <div className={styles.weatherExtendedIconsContainer}>
              {forecastIcons.map((icons) => {
                if (icons.name === chartDescription) {
                  return (
                    <div
                      className={styles.weatherExtendedIcon}
                      key={icons.name}
                    >
                      {icons.icon}
                    </div>
                  );
                }
              })}
            </div>
            <div className={styles.weatherExtendedCardFooter}>
              <h2 className={styles.weatherExtendedDataContainerHigh}>
                <span>H:{item.high}</span>
                <span>
                  {forecastIcons.map(
                    (icons) => icons.name === chartDescription && icons.output
                  )}
                </span>
              </h2>
              <h2 className={styles.weatherExtendedDataContainerLow}>
                <span>L:{item.low}</span>
                <span>
                  {forecastIcons.map(
                    (icons) => icons.name === chartDescription && icons.output
                  )}
                </span>
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherExtendedForecast;
