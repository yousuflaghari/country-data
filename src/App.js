import React, { useEffect, useState } from "react";
import axios from "axios";
import { LanguageBarChart } from "./components/chart";
import "./App.css";

function App() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const data = response.data;
        console.log(data);
        setCountryData(data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {countryData.length > 0 && (
        <LanguageBarChart countryData={countryData} region="Europe" />
      )}
    </div>
  );
}

export default App;
