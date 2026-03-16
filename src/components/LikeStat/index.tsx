"use client";

import { useTranslation } from "react-i18next";
import FrameWrapper from "@components/FrameWrapper";
import type { MonthStat } from "@/interfaces";
import { LineChart } from "@mui/x-charts/LineChart";

interface ITableStats {
  title: string;
  stats: MonthStat[];
}

const MONTH_NAMES = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

function LikeStats({ title, stats }: ITableStats) {
  const maxCount = Math.max(...stats.map((item) => item.count), 0);
  const { t } = useTranslation();
  return (
    <div className="table-statistics">
      <h2> {t(title.toLocaleLowerCase())} </h2>
      <FrameWrapper>
        <LineChart
          xAxis={[
            {
              scaleType: "point",
              data: MONTH_NAMES.map((month) => t(`months.${month}`)),
            },
          ]}
          yAxis={[
            {
              disableLine: true,
              tickMinStep: 1,
              min: 0,
              max: maxCount < 10 ? 10 : maxCount,
            },
          ]}
          series={[
            {
              data: stats.map((item) => item.count),
              color: "var(--border-color)",
            },
          ]}
          grid={{ horizontal: true }}
          height={438}
          sx={{
            "& .MuiChartsAxis-root line": {
              stroke: "var(--light-text-color)",
            },
            "& .MuiChartsAxis-root path": {
              stroke: "var(--light-text-color)",
            },
            "& .MuiChartsAxis-root text": {
              fill: "var(--light-text-color)",
            },

            "& .MuiChartsGrid-horizontalLine": {
              stroke: "var(--light-text-color)",
            },
          }}
        />
      </FrameWrapper>
    </div>
  );
}

export default LikeStats;
