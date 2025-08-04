import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CountryCard = ({ country }) => {
  return (
    <div className="border rounded shadow p-4 text-center space-y-2">
      <img
        src={country.flags?.png}
        alt={country.name?.common}
        className="h-32 w-full object-cover rounded"
      />
      <h2 className="text-xl font-bold">{country.name?.common}</h2>
      <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Timezone:</strong> {country.timezones?.[0]}</p>
    </div>
  );
};

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
        // Optional: sort alphabetically
        const sorted = res.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sorted);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8">🌍 Country Information</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {countries.map((country) => (
          <CountryCard key={country.cca2} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
