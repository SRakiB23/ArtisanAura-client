import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function AllArtCraftTable({ art }) {
  const {
    item_name = "",
    subcategory_name,
    short_description,
    price,
    rating,
    photo,
    customization,
    processing_time,
    stockStatus,
    _id,
  } = art;

  return (
    <>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{item_name}</div>
          </div>
        </div>
      </td>
      <td>
        {subcategory_name}
        <br />
      </td>
      <td>{price}</td>
      <th>
        <Link to={`/artdetails/${art._id}`}>
          <button className="btn btn-primary btn-xs">details</button>
        </Link>
      </th>
    </>
  );
}

export default AllArtCraftTable;
