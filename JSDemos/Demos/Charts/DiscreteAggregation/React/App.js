import React from 'react';

import Chart, {
  ArgumentAxis,
  Title,
  Subtitle,
  CommonSeriesSettings,
  SeriesTemplate,
  Aggregation,
} from 'devextreme-react/chart';

import { oilProductionData } from './data.js';

export default function App() {
  return (
    <Chart
      id="chart"
      dataSource={oilProductionData}
    >
      <Title text="Production of Crude Oil">
        <Subtitle text="(in Barrels)"></Subtitle>
      </Title>
      <CommonSeriesSettings
        argumentField="state"
        valueField="value"
        type="bar"
      >
        <Aggregation
          enabled={true}
          method="sum"
        >
        </Aggregation>
      </CommonSeriesSettings>
      <ArgumentAxis aggregateByCategory={true}></ArgumentAxis>
      <SeriesTemplate nameField="year"></SeriesTemplate>
    </Chart>
  );
}
