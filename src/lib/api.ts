import { Weather } from '@/types/api';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

export const getWeatherData: Weather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const getWeatherForcast = async (lat: number, lon: number) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
