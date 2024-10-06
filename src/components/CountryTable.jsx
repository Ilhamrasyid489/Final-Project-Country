const CountryTable = ({ countries }) => {
  const tableData = countries.map((c) => (
    <tr key={c.cca3}>
      <td>
        <img
          className="country-flag h-10 w-10"
          src={c.flags.png ? c.flags.png : "No Image Available."}
          alt={`${c.name.common} flag`}
        />
      </td>
      <td>{c.name.common}</td>
      <td>{c.capital || "N/A"}</td>
      <td>{c.population.toLocaleString()}</td>
      <td>
        <a href={c.maps.googleMaps} target="_blank" rel="noopener noreferrer">
          View Map
        </a>
      </td>
      <td>{c.independent === false ? "No" : "Yes"}</td>
    </tr>
  ));

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
        <thead>
          <tr className="text-white">
            <th className="py-2 px-4 border">Flag</th>
            <th className="py-2 px-4 border">Country</th>
            <th className="py-2 px-4 border">Capital</th>
            <th className="py-2 px-4 border">Population</th>
            <th className="py-2 px-4 border">Map</th>
            <th className="py-2 px-4 border">Independent?</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    </div>
  );
};

export default CountryTable;
