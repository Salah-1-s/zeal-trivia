import { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface LineGraphProps {
  xAxisValues: string[];
  yAxisValues: number[];
}

export default function LineGraph({
  xAxisValues,
  yAxisValues,
}: LineGraphProps) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const options = {
      xAxis: {
        type: "category",
        data: xAxisValues,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: yAxisValues,
          type: "line",
          smooth: true,
        },
      ],
    };

    chart.setOption(options);

    return () => {
      chart.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
}
