import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CompareForm = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCountry1, setSelectedCountry1] = useState("");
  const [selectedCountry2, setSelectedCountry2] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        setCountries(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Arahkan ke halaman perbandingan dengan state
    navigate("/compare/result", {
      state: { country1: selectedCountry1, country2: selectedCountry2 },
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Compare Countries</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="country1">Select Country 1:</label>
        <select
          id="country1"
          value={selectedCountry1}
          onChange={(e) => setSelectedCountry1(e.target.value)}
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.cca3} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>

        <label htmlFor="country2">Select Country 2:</label>
        <select
          id="country2"
          value={selectedCountry2}
          onChange={(e) => setSelectedCountry2(e.target.value)}
          disabled={!selectedCountry1} // Disable jika country 1 belum dipilih
        >
          <option value="">Select a country</option>
          {countries
            .filter((country) => country.name.common !== selectedCountry1) // Hapus country 1 dari pilihan country 2
            .map((country) => (
              <option key={country.cca3} value={country.name.common}>
                {country.name.common}
              </option>
            ))}
        </select>

        <button type="submit" disabled={!selectedCountry1 || !selectedCountry2}>
          Compare
        </button>
      </form>
    </div>
  );
};

export default CompareForm;
