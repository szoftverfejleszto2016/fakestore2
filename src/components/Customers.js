import React, { useEffect, useState } from 'react';

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [sample, setSample] = useState('');

  useEffect(function () {
    fetch('https://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((json) => setCustomers(json));
  }, []);

  return (
    <div>
      <h1>Customers</h1>
      <input
        type="text"
        value={sample}
        onChange={(e) => setSample(e.target.value)}
      />
      <ul>
        {customers
          .filter(
            (c) =>
              c.name.firstname.includes(sample) ||
              c.name.lastname.includes(sample)
          )
          .map((c) => (
            <li key={c.id}>{c.name.firstname + ' ' + c.name.lastname}</li>
          ))}
      </ul>
    </div>
  );
}
