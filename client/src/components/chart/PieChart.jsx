import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../../graphql/query/transaction.query";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";

const PieChart = () => {
  const { data } = useQuery(GET_CATEGORIES);
  Chart.register(ArcElement, Tooltip, Legend);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "$",
        data: [],
        backgroundColor: [],
        borderWidth: 1,
        borderRadius: 5,
        spacing: 10,
        cutout: 130,
      },
    ],
  });

  const options = {
    plugins: {
      responsive: true,
    },
  };

  useEffect(() => {
    //loop through each data values and return it as an an array

    if (data?.categoryTallies) {
      const arrayOfCategory = data?.categoryTallies?.map(
        (value) => value.category
      );
      const arrayOfAmount = data?.categoryTallies?.map((value) => value.amount);

      const backgroundColor = [];
      const borderColors = [];

      arrayOfCategory.forEach((val) => {
        if (val === "savings") {
          backgroundColor.push("green");
          borderColors.push("green");
        } else if (val === "expense") {
          backgroundColor.push("red");
          borderColors.push("red");
        } else if (val === "asset") {
          backgroundColor.push("lightblue");
          borderColors.push("lightblue");
        }
      });

      setChartData((prev) => ({
        labels: arrayOfCategory,
        datasets: [
          {
            ...prev.datasets[0],
            data: arrayOfAmount,
            backgroundColor: backgroundColor,
            borderColors: borderColors,
          },
        ],
      }));
    }
  }, [data]);

  return <Doughnut data={chartData} options={options} />;
};

export default PieChart;
