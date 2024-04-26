import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArtDetails = () => {
  const { _id } = useParams();
  const [artDetails, setArtDetails] = useState(null);

  useEffect(() => {
    // Fetch art details using the _id parameter
    fetch(`http://localhost:3000/arts/${_id}`)
      .then(response => response.json())
      .then(data => setArtDetails(data))
      .catch(error => console.error('Error fetching art details:', error));
  }, [_id]);

  return (
    <div>
      <h2>Art Details</h2>
      {artDetails && (
        <div>
          <p>Name: {artDetails.name}</p>
          <p>Item Name: {artDetails.item_name}</p>
          {/* Display other details of the art */}
        </div>
      )}
    </div>
  );
};

export default ArtDetails;
