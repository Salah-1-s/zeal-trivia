import { useContext, useEffect, useRef } from "react";
import * as echarts from "echarts";
import { QUESTIONS_CONTEXT } from "../../context/questions.context";

export default function BarChart() {
  const chartRef = useRef(null);

  const { correctAnswers, falseAnswers, skippedQuestions } =
    useContext(QUESTIONS_CONTEXT);

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
          name: "Data",
          type: "pie",
          radius: "50%",
          data: [
            { value: correctAnswers, name: "Correct Answers" },
            { value: falseAnswers, name: "False Answers" },
            { value: skippedQuestions, name: "Skipped Questions" },
          ],
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
