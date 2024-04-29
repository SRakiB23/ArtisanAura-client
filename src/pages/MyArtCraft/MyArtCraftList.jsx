import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function MyArtCraftList({ art, artDetails, setArtDetails }) {
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

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://artisan-aura-serverside-qgcatct67-sazzad-bashar-rakibs-projects.vercel.app/arts/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Arts Has Been Deleted", "Sucess");
              const remaining = artDetails.filter(
                (artcraft) => artcraft._id !== _id
              );
              setArtDetails(remaining);
            }
          });
      }
    });
  };

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
            <p>Customization: {customization}</p>
            <div className="flex items-center justify-around">
              <Link to={`/updatedetails/${art._id}`}>
                <button className="bg-green-600 p-4 text-white rounded-2xl">
                  Update
                </button>
              </Link>
              <button
                className="bg-red-600 p-4 text-white rounded-2xl"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyArtCraftList;
