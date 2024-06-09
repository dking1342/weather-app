import { ChartDescription } from '@/types/weather';
import React from 'react';

type Props = {
  name: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  chartDescription: ChartDescription | string;
};

const WeatherChartButton = (props: Props) => {
  const { name, setState, description, chartDescription } = props;
  return (
    <button
      style={{
        textDecoration: chartDescription === name ? 'underline' : '',
      }}
      onClick={() => {
        setState(name);
      }}
    >
      {description}
    </button>
  );
};

export default WeatherChartButton;
