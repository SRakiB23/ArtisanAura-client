import React from "react";
import { Link } from "react-router-dom";

function AllArtCraftSubList({ artCraft, setSelectedSubcategory }) {
  const { subcategory_name, photo } = artCraft;

  const handleClick = () => {
    setSelectedSubcategory(subcategory_name);
  };

  return (
    <div>
      <Link to={`/artscraftsubcategory/${subcategory_name}`}>
        <div
          className="mb-2 rounded-xl bg-gradient-to-r from-blue-300 via-green-200 to-amber-300"
          onClick={handleClick}
        >
          <div className="card-content flex justify-between p-2">
            <img
              src={photo}
              alt="subcategory"
              className="h-36 w-40 object-cover rounded-lg"
            />
            <h2 className="card-title text-xl font-bold">{subcategory_name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default AllArtCraftSubList;
