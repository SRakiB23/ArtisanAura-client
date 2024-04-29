import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function CraftCard({ art }) {
  const {
    name,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    photo,
    customization,
    processing_time,
    stockStatus,
    email,
    _id,
  } = art;
  return (
    <div>
      <div className="card-wrapper">
        <div className="card bg-base-200 w-523 h-523">
          <div className="card-content p-4 flex flex-col">
            <img
              src={photo}
              alt="image"
              className="rounded-xl h-96 object-cover mb-4"
            />
            <h2 className="card-title text-lg font-bold">{item_name}</h2>
            <p className="mb-2">{short_description}</p>
            <p className="mb-2">Price: {price}$</p>
            <p className="mb-2">Processing Time: {processing_time}</p>
            <Link to={`/artdetails/${art._id}`} className="mt-auto">
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CraftCard;
