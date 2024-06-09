import { WeatherForecastList, WeatherForecastType } from '@/types/api';
import React, { useCallback, useEffect, useState } from 'react';
import LineChart from './LineChart';
import styles from '../styles/WeatherBody.module.css';
import { ChartDescription } from '@/types/weather';

type Props = {
  forecast: WeatherForecastList[] | null;
  chartDescription: string;
};

const WeatherChart = (props: Props) => {
  const { forecast, chartDescription } = props;
  const [chartData, setChartData] = useState<any>([]);
  const [chartX, setChartX] = useState<string[]>([]);
  const [chartY, setChartY] = useState<number[]>([]);

  const getChartData = useCallback(
    (description: string, forecast: WeatherForecastList[]) => {
      setChartX([]);
      setChartY([]);
      let dt: string[] = [];
      let data: number[] = [];
      forecast.forEach((val) => {
        dt = [...dt, val.dt_txt];
        switch (description) {
          case 'temp':
            data = [...data, val.main.temp];
            break;
          case 'feels_like':
            data = [...data, val.main.feels_like];
            break;
          case 'humidity':
            data = [...data, val.main.humidity];
            break;
          case 'speed':
            data = [...data, val.wind.speed];
            break;
          case 'pressure':
            data = [...data, val.main.pressure];
          default:
            break;
        }
      });
      setChartX(dt);
      setChartY(data);
    },
    []
  );

  useEffect(() => {
    if (forecast !== null && forecast) {
      getChartData(chartDescription, forecast);
    }
  }, [forecast, getChartData, chartDescription]);

  useEffect(() => {
    if (chartX.length && chartY.length) {
      setChartData({
        labels: chartX,
        datasets: [
          {
            label: 'Temperature (°C)',
            data: chartY,
            borderColor: 'rgba(253, 52, 199, 1)',
            backgroundColor: 'rgba(253, 52, 199, 0.2)',
            fill: true,
            tension: 0.4,
            cubicInterpolationMode: 'monotone',
            pointRadius: 0,
            pointHoverRadius: 0,
          },
        ],
      });
    }
  }, [chartX, chartY]);

  return (
    <div className={styles.weatherChartContainer}>
      {chartData.labels && <LineChart data={chartData} />}
    </div>
  );
};

export default WeatherChart;
