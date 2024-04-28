import React from "react";
import { Link } from "react-router-dom";

function AllArtCraftSubList({ artCraft, artsCrafts, setArtsCrafts }) {
  const {
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    photo,
    processing_time,
    _id,
  } = artCraft;
  return (
    <div>
      <div className="mb-2">
        <div className="rounded-xl bg-gradient-to-r from-blue-500 via-green-200 to-amber-400 ...">
          <div className="card-content flex justify-between p-2">
            <img
              src={photo}
              alt="subcategory"
              className="h-36 w-40 object-cover"
            />
            <h2 className="card-title text-xl font-bold">{subcategory_name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllArtCraftSubList;
