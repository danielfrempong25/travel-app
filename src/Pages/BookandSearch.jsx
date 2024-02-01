import React, { useEffect, useState } from "react";
import { PaystackButton } from "react-paystack";

const BookandSearch = () => {
  const publicKey = "pk_test_f2e08cab74c7024475af3ebbb475f90bc63aa23d";
  const amount = 1000000;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount: amount * 10,
    currency: "GHS",
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    // Fetch the list of countries from the REST Countries API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    // Filter countries based on the search query
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchQuery, countries]);

  return (
    <div className="container pt-5 mx-0 px-5 mr-0">
      <h2 className="fw-bold fst-italic text-primary">Search and Book</h2>
      <div className="d-flex justify-content-between">
        <div className="mb-4">
          <div className="input-group">
            <h2 className="fw-bold fst-italic text-primary">Country Search</h2>
            <input
              type="text"
              placeholder="Search for a country"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <ul>
            {filteredCountries.map((country) => (
              <li key={country.cca2}>{country.name.common}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        {/* Your booking form here */}
        <div className="checkout-form">
          <div className="checkout-field">
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <PaystackButton className="paystack-button" {...componentProps} />
        </div>
      </div>
    </div>
  );
};

export default BookandSearch;
