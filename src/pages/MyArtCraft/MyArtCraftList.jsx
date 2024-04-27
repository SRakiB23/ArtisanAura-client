import React from "react";
import { Link } from "react-router-dom";

function MyArtCraftList({ art }) {
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
  console.log(art.item_name);
  return (
    <div>
      <div className="card-wrapper">
        <div className="card w-96 bg-base-200">
          <div className="px-4 pt-4 w-80 mx-auto">
            <img src={photo} alt="Shoes" className="rounded-xl" />
          </div>
          <div className="card-body">
            <h2 className="card-title">{item_name}</h2>
            <p>{short_description}</p>
            <p>Price: {price}$</p>
            <p>Processing Time: {processing_time}</p>
            <Link to={`/artdetails/${art._id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyArtCraftList;