import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function LanguageBarChart({ countryData, region }) {
  const filteredCountries = countryData.filter(
    (country) => country.region === region
  );

  const languageCounts = filteredCountries.reduce((acc, country) => {
    const languages = Object.keys(country.languages);
    languages.forEach((language) => {
      acc[language] = (acc[language] || 0) + 1;
    });
    console.log(acc);

    return acc;
  }, {});

  const labels = Object.keys(languageCounts);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Number of Countries",
        data: labels.map((label) => languageCounts[label]),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "60%", height: "50%" }}>
      <Bar
        data={data}
        options={{
          indexAxis: "x",
          plugins: {
            title: {
              display: true,
              text: `Popular Languages in ${region}`,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
