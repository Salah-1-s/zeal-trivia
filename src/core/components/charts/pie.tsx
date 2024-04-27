import { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface PieChartProps {
  data: { value: number; name: string }[];
}
export default function PieChart({ data }: PieChartProps) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const options = {
      title: {
        text: "Questions Summary",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      series: [
        {
          name: "Score",
          type: "pie",
          radius: "50%",
          data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
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
