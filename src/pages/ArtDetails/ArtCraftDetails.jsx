import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArtCraftDetails = () => {
  const { _id } = useParams();
  const [artCraftDetails, setArtCraftDetails] = useState(null);

  useEffect(() => {
    // Fetch art details using the _id parameter
    fetch(
      `https://artisan-aura-serverside-qgcatct67-sazzad-bashar-rakibs-projects.vercel.app/artscrafts/details/${_id}`
    )
      .then((response) => response.json())
      .then((data) => setArtCraftDetails(data))
      .catch((error) => console.error("Error fetching art details:", error));
  }, [_id]);

  return (
    <div
      className="bg-cover bg-center min-h-screen max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 opacity-90"
      style={{
        backgroundImage: "url('https://i.ibb.co/vzxmSkx/wave-haikei.png')",
      }}
    >
      <div className="max-w-7xl mx-auto text-white text-xl">
        <img src="" alt="" />
        <h2 className="text-center font-bold text-5xl text-black bg-green-500 rounded-xl py-8 mb-4">
          Art Details
        </h2>
        {artCraftDetails && (
          <div className="grid md:grid-cols-2 gap-10">
            <div className="md:w-96 flex items-center">
              <img src={artCraftDetails.photo} alt="" className="mx-auto" />
            </div>
            <div>
              <p className="p-4 text-4xl font-bold">
                {artCraftDetails.item_name}
              </p>
              <p className="p-4 text-2xl">${artCraftDetails.price}</p>
              <p className="p-4">
                <span className="font-bold text-xl">Subcategory Name: </span>
                {artCraftDetails.subcategory_name}
              </p>
              <p className="p-4">
                <span className="font-bold text-xl">Short Description: </span>
                {artCraftDetails.short_description}
              </p>
              <p className="p-4">
                <span className="font-bold text-xl">Customization: </span>
                {artCraftDetails.customization}
              </p>
              <p className="p-4">
                <span className="font-bold text-xl">Processing Time: </span>
                {artCraftDetails.processing_time}
              </p>
              <div className="md:flex gap-10">
                <p className="p-4">
                  <span className="font-bold text-xl">Stock Status: </span>
                  {artCraftDetails.stockStatus}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtCraftDetails;
