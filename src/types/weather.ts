import { ReactNode } from 'react';
import { IconType } from 'react-icons/lib';

export type WeatherList = {
  id: string;
  description: string;
  data: string;
  icon: React.JSX.Element;
};

export type ChartDescription =
  | 'temp'
  | 'feels_like'
  | 'pressure'
  | 'humidity'
  | 'speed';
