import React from "react";
import { DefaultizedPieValueType } from "@mui/x-charts";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const data = [
  { label: "Hirohito", value: 78, color: "#ff6384" },
  { label: "Adolf Hitler", value: 45, color: "#ffcd56" },
  { label: "Soeharto", value: 25, color: "#36a2eb" },
];

const sizing = {
  margin: { right: 5 },
  width: 400,
  height: 400,
  legend: { hidden: true },
};

const getArcLabel = (params: DefaultizedPieValueType) => {
  return `${params.value}%`;
};

const Chart = () => {
  return (
    <div>
      <PieChart
        series={[
          {
            outerRadius: 200,
            data,
            arcLabel: getArcLabel,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "black",
            fontSize: 24,
          },
        }}
        {...sizing}
      />
    </div>
  );
};

export default Chart;