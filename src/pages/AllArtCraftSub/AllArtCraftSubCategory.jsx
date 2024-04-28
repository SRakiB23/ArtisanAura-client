import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { DiVisualstudio } from "react-icons/di";

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const d = useParams();
  console.log(d);

  useEffect(() => {
    setLoading(true);
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

  if (loading)
    return (
      <p>
        <span className="loading loading-spinner loading-lg"></span>
      </p>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-center font-bold text-3xl py-5">
        Arts & Crafts Category List
      </h2>
      <div className="mb-6 border rounded-xl p-2">
        {data.map((item, index) => (
          <div className="md:flex items-center gap-10" key={index}>
            <div style={{ width: "300px", height: "300px" }}>
              <img
                src={item.photo}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4">
              <p className="text-2xl font-semibold pb-2">{item.item_name}</p>
              <p className="text-xl text-gray-700">
                SubCategory: {item.subcategory_name}
              </p>
              <p className="text-xl mt-2">
                Description: {item.short_description}
              </p>
              <p className="text-xl">Price: {item.price}</p>
              <p className="text-xl">Rating: {item.rating}</p>
              <p className="text-xl">Processing Time: {item.processing_time}</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-8 border rounded-xl p-2">
        {data2.map((item, index) => (
          <div className="md:flex items-center gap-10" key={index}>
            <div style={{ width: "300px", height: "300px" }}>
              <img
                src={item.photo}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4">
              <p className="text-2xl font-semibold pb-2">{item.item_name}</p>
              <p className="text-xl text-gray-700">
                SubCategory: {item.subcategory_name}
              </p>
              <p className="text-xl mt-2">
                Description: {item.short_description}
              </p>
              <p className="text-xl">Price: {item.price}</p>
              <p className="text-xl">Rating: {item.rating}</p>
              <p className="text-xl">Processing Time: {item.processing_time}</p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
