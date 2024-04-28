import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const d = useParams();
  console.log(d);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/artscrafts/${d.subcategory}`
        );
        const response2 = await axios.get(
          `http://localhost:3000/artss/${d.subcategory}`
        );
        setData(response.data);
        setData2(response2.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [d]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Data from API</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.subcategory_name}</li> // Assuming your data has a 'name' field
        ))}
      </ul>
      <h2>Data2 from API</h2>
      <ul>
        {data2.map((item, index) => (
          <li key={index}>{item.subcategory_name}</li> // Assuming your data has a 'name' field
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
