import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllArtCraftTable from "./AllArtCraftTable";

function AllArtCraft() {
  const loadedArts = useLoaderData();

  const [arts, setArts] = useState(loadedArts);
  console.log(arts);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <h1 className="text-center font-bold text-3xl py-6">
          All Arts & Crafts
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Subcategory Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {arts.map((art) => (
              <tr key={art._id}>
                <AllArtCraftTable
                  art={art}
                  arts={arts}
                  setArts={setArts}
                ></AllArtCraftTable>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllArtCraft;
