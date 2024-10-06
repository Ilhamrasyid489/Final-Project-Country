import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ComparePage = () => {
  const [country1Data, setCountry1Data] = useState(null);
  const [country2Data, setCountry2Data] = useState(null);
  const location = useLocation();

  // Capture data from state
  const { country1, country2 } = location.state || {};

  useEffect(() => {
    if (country1 && country2) {
      Promise.all([
        fetch(`https://restcountries.com/v3.1/name/${country1}`).then((res) =>
          res.json()
        ),
        fetch(`https://restcountries.com/v3.1/name/${country2}`).then((res) =>
          res.json()
        ),
      ])
        .then(([data1, data2]) => {
          setCountry1Data(data1[0]);
          setCountry2Data(data2[0]);
        })
        .catch((error) => {
          console.error("Error fetching country data:", error);
        });
    }
  }, [country1, country2]);

  if (!country1Data || !country2Data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        Comparison Between {country1Data.name.common} and{" "}
        {country2Data.name.common}
      </h2>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Feature</th>
            <th className="border border-gray-300 p-2">
              {country1Data.name.common}
            </th>
            <th className="border border-gray-300 p-2">
              {country2Data.name.common}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">
              <strong>Population</strong>
            </td>
            <td className="border border-gray-300 p-2">
              {country1Data.population.toLocaleString()}
            </td>
            <td className="border border-gray-300 p-2">
              {country2Data.population.toLocaleString()}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              <strong>Region</strong>
            </td>
            <td className="border border-gray-300 p-2">
              {country1Data.region}
            </td>
            <td className="border border-gray-300 p-2">
              {country2Data.region}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              <strong>Capital</strong>
            </td>
            <td className="border border-gray-300 p-2">
              {country1Data.capital}
            </td>
            <td className="border border-gray-300 p-2">
              {country2Data.capital}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              <strong>Area</strong>
            </td>
            <td className="border border-gray-300 p-2">
              {country1Data.area.toLocaleString()} km²
            </td>
            <td className="border border-gray-300 p-2">
              {country2Data.area.toLocaleString()} km²
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              <strong>Flag</strong>
            </td>
            <td className="border border-gray-300 p-2">
              <img
                src={country1Data.flags.svg}
                alt={`${country1Data.name.common} flag`}
                className="w-20"
              />
            </td>
            <td className="border border-gray-300 p-2">
              <img
                src={country2Data.flags.svg}
                alt={`${country2Data.name.common} flag`}
                className="w-20"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparePage;
