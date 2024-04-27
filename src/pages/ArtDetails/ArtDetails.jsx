import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ArtDetails = () => {
  const { _id } = useParams();
  const [artDetails, setArtDetails] = useState(null);

  useEffect(() => {
    // Fetch art details using the _id parameter
    fetch(`http://localhost:3000/arts/${_id}`)
      .then((response) => response.json())
      .then((data) => setArtDetails(data))
      .catch((error) => console.error("Error fetching art details:", error));
  }, [_id]);

  return (
    <div className="bg-cover bg-center min-h-screen max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 opacity-90" style=
    {{ backgroundImage: "url('https://i.ibb.co/vzxmSkx/wave-haikei.png')" }}>
      <div className="max-w-7xl mx-auto text-white text-xl">
        <img src="" alt="" />
        <h2 className="text-center font-bold text-5xl text-black bg-green-500 rounded-xl py-8 mb-4">Art Details</h2>
        {artDetails && (
          <div className="grid md:grid-cols-2 gap-10">
            <div className="md:w-96 flex items-center">
              <img src={artDetails.photo} alt="" className="mx-auto" />
            </div>
            <div>
              <p className="p-4">
                <span className="font-bold text-xl p-4">Item Name:</span>
                {artDetails.item_name}
              </p>
              <p className="p-4">
                <span className="font-bold text-xl p-4">Subcategory Name:</span>
                {artDetails.subcategory_name}
              </p>
              <p className="p-4">
                <span className="font-bold text-xl p-4">Short Description:</span>
                {artDetails.short_description}
              </p>
              <p className="p-4">
                <span className="font-bold text-xl p-4">Customization:</span>
                {artDetails.customization}
              </p>
              <p className="p-4">
                <span className="font-bold text-xl p-4">Processing Time:</span>
                {artDetails.processing_time}
              </p>
              <div className="md:flex gap-10">
                <p className="p-4">
                  <span className="font-bold text-xl p-4">Stock Status:</span>
                  {artDetails.stockStatus}
                </p>
                <p className="p-4">
                  <span className="font-bold text-xl p-4">Price:</span>
                  ${artDetails.price}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
  
  
}

export default ArtDetails;
