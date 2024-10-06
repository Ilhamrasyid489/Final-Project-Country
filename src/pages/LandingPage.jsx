import { useEffect, useState } from "react";
import CountryTable from "../components/CountryTable"; // Pastikan path ini benar

const LandingPage = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        // Mengurutkan data berdasarkan populasi
        const sortedCountries = data.sort((a, b) => {
          return (b.population || 0) - (a.population || 0);
        });
        setCountries(sortedCountries);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">COUNTRY RANKING</h2>
      <CountryTable countries={countries} />
    </div>
  );
};

export default LandingPage;
