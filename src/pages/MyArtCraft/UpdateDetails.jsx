import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

function UpdateDetails() {
  const { _id } = useParams();
  const [artDetails, setArtDetails] = useState(null);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch art details using the _id parameter
    setLoading(true);
    fetch(
      `https://artisan-aura-serverside-qgcatct67-sazzad-bashar-rakibs-projects.vercel.app/arts/${_id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setArtDetails(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching art details:", error));
  }, [_id]);
  console.log(artDetails);

  const handleUpdateArts = (event) => {
    event.preventDefault();
    const form = event.target;
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const short_description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const customization = form.customization.value;
    const processing_time = form.processing_time.value;
    const stockStatus = form.stockStatus.value;

    const updateArts = {
      item_name,
      subcategory_name,
      short_description,
      price,
      rating,
      photo,
      customization,
      processing_time,
      stockStatus,
    };
    console.log(updateArts);

    fetch(
      `https://artisan-aura-serverside-qgcatct67-sazzad-bashar-rakibs-projects.vercel.app/arts/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateArts),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your Arts Has Been Updated", "success");
        }
      });
  };

  return (
    <div>
      <div
        className="bg-cover bg-center min-h-screen max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/vH9tWSk/stacked-waves-haikei.png')",
        }}
      >
        <div className="px-20 py-10 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black pb-10">
            Update Arts & Crafts
          </h2>
          <form onSubmit={handleUpdateArts}>
            {/*User PhotoURL*/}
            <div className="form-control w-full mb-6">
              <label className="label ">
                <span className="label-text text-white">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={artDetails?.photo}
                  placeholder="PhotoURL"
                  className="input input-bordered md:w-full"
                />
              </label>
            </div>
            {/*form row for name and subcategory*/}
            <div className="md:flex gap-4 mb-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-white">Item Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="item_name"
                    defaultValue={artDetails?.item_name}
                    placeholder="Item Name"
                    className="input input-bordered md:w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-white">
                    Subcategory Name
                  </span>
                </label>
                <label className="select">
                  <select
                    name="subcategory_name"
                    defaultValue={artDetails?.subcategory_name}
                  >
                    <option>Landscape Painting</option>
                    <option>Portrait Drawing</option>
                    <option>Watercolour Painting</option>
                    <option>Oil Painting</option>
                    <option>Charcoal Sketching</option>
                    <option>Cartoon Drawing</option>
                  </select>
                </label>
              </div>
            </div>
            {/*form row for short description and price*/}
            <div className="md:flex gap-4 mb-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-white">
                    Short Description
                  </span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="short_description"
                    defaultValue={artDetails?.short_description}
                    placeholder="Short Description"
                    className="input input-bordered md:w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-white">Price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    defaultValue={artDetails?.price}
                    placeholder="Price"
                    className="input input-bordered md:w-full"
                  />
                </label>
              </div>
            </div>
            {/*form row for Rating and Customization*/}
            <div className="md:flex gap-4 mb-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-white">Rating</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="rating"
                    defaultValue={artDetails?.rating}
                    placeholder="Rating"
                    className="input input-bordered md:w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-white">Customization</span>
                </label>
                <label className="select">
                  <select
                    name="customization"
                    defaultValue={artDetails?.customization}
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </label>
              </div>
            </div>
            {/*form row for Processing Time and StockStatus*/}
            <div className="md:flex gap-4 mb-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-white">Processing Time</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="processing_time"
                    defaultValue={artDetails?.processing_time}
                    placeholder="Processing Time"
                    className="input input-bordered md:w-full"
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-white">Stock Status</span>
                </label>
                <label className="select">
                  <select
                    name="stockStatus"
                    defaultValue={artDetails?.stockStatus}
                  >
                    <option>In Stock</option>
                    <option>Made to Order</option>
                  </select>
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Update Arts"
              className="bg-green-500 text-black btn btn-block"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateDetails;
