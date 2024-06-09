'use client';
import styles from './styles/page.module.css';
import { getWeatherData } from '@/lib/api';
import SearchForm from './components/SearchForm';
import { useState } from 'react';
import { WeatherObject } from '@/types/api';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherForecast from './components/WeatherForecast';
import Navbar from './components/Navbar';
import WeatherBody from './components/WeatherBody';
import WeatherDetails from './components/WeatherDetails';
import Link from 'next/link';
import Welcome from './components/Welcome';
import ErrorPage from './components/ErrorPage';
// import { testDailyData } from './data/testDailyData';

export default function Home() {
  const [weather, setWeather] = useState<WeatherObject>(null);

  const handleSearch = async (city: string) => {
    const data = await getWeatherData(city);
    // const data = testDailyData;
    setWeather(data);
  };

  return (
    <main className={styles.main}>
      <Navbar>
        <Link href={'/'}>AccuWeather</Link>
        <SearchForm onSearch={handleSearch} />
      </Navbar>
      {weather && weather.cod === '404' ? (
        <ErrorPage />
      ) : weather && weather.cod !== '404' ? (
        <WeatherBody>
          <WeatherDisplay weather={weather} />
          <div className={styles.detailsWrapper}>
            <WeatherDetails weather={weather} />
            <WeatherForecast
              lat={weather.coord.lat ? weather.coord.lat : null}
              lon={weather.coord.lon ? weather.coord.lon : null}
            />
          </div>
        </WeatherBody>
      ) : (
        <Welcome>
          <p>Search for the weather in your city</p>
          <SearchForm onSearch={handleSearch} />
        </Welcome>
      )}
    </main>
  );
}
