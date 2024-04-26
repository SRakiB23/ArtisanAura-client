import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

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
  } = art;
  return (
    <div>
      <div className="card w-96 bg-base-200">
        <div className="px-4 pt-4 w-80 mx-auto">
          <img src={photo} alt="Shoes" className="rounded-xl" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{item_name}</h2>
          <p>{short_description}</p>
          <div className="flex justify-between lg:gap-48"><p>{price}</p>
          <p>{processing_time}</p></div>
          <div className="card-actions">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CraftCard;
