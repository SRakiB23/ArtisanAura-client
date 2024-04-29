import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { DiVisualstudio } from "react-icons/di";
import { key } from "localforage";

const AllArtCraftSubCategory = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const d = useParams();
  const id = useParams();
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
      <div className="md:grid grid-cols-2 lg:grid-cols-3">
        <div className="mb-6 rounded-xl p-2">
          {data.map((item, index) => (
            <div
              className="card card-compact w-96 bg-base-100 shadow-xl"
              key={index}
            >
              <figure>
                <img className="h-64" src={item.photo} alt={item.item_name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl font-semibold pb-2">
                  {item.item_name}
                </h2>
                <p className="text-xl text-gray-700">
                  <span className="font-bold text-2xl">SubCategory: </span>
                  {item.subcategory_name}
                </p>
                <p className="text-xl mt-2">
                  <span className="font-bold text-2xl">Description:</span>
                  {item.short_description}
                </p>
                <p className="text-xl">
                  <span className="font-bold text-2xl">Price: </span>
                  {item.price}
                </p>
                <p className="text-xl">
                  <span className="font-bold text-2xl">Rating:</span>
                  {item.rating}
                </p>
                <p className="text-xl">
                  <span className="font-bold text-2xl">Processing Time:</span>
                  {item.processing_time}
                </p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/artcraftdetails/${item._id}`}
                    className="btn btn-primary"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-6 rounded-xl p-2">
          {data2.map((item, index) => (
            <div
              className="card card-compact w-96 bg-base-100 shadow-xl"
              key={index}
            >
              <figure>
                <img className="" src={item.photo} alt={item.item_name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl font-semibold pb-2">
                  {item.item_name}
                </h2>
                <p className="text-xl text-gray-700">
                  <span className="font-bold text-2xl">SubCategory: </span>
                  {item.subcategory_name}
                </p>
                <p className="text-xl mt-2">
                  <span className="font-bold text-2xl">Description:</span>
                  {item.short_description}
                </p>
                <p className="text-xl">
                  <span className="font-bold text-2xl">Price: </span>
                  {item.price}
                </p>
                <p className="text-xl">
                  <span className="font-bold text-2xl">Rating:</span>
                  {item.rating}
                </p>
                <p className="text-xl">
                  <span className="font-bold text-2xl">Processing Time:</span>
                  {item.processing_time}
                </p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/artdetails/${item._id}`}
                    className="btn btn-primary"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllArtCraftSubCategory;
