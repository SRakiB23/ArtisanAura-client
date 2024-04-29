import React, { useEffect, useState } from "react";
import AllArtCraftSubList from "./AllArtCraftSubList";

function AllArtCraftSub({}) {
  const [artsCrafts, setArtsCrafts] = useState([]);

  useEffect(() => {
    fetch(
      "https://artisan-aura-serverside-qgcatct67-sazzad-bashar-rakibs-projects.vercel.app/artscrafts"
    )
      .then((response) => response.json())
      .then((data) => setArtsCrafts(data))
      .catch((error) =>
        console.error("Error fetching arts & crafts data:", error)
      );
  }, []);

  return (
    <div>
      <h2
        className="text-center text-3xl font-bold py-8 rounded-2xl my-4
      bg-gradient-to-r from-purple-400 via-red-400 to-yellow-300"
      >
        Arts & Crafts Category
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pl-4">
        {artsCrafts.map((artCraft) => (
          <AllArtCraftSubList
            key={artCraft._id}
            artCraft={artCraft}
            artsCrafts={artsCrafts}
            setArtsCrafts={setArtsCrafts}
          ></AllArtCraftSubList>
        ))}
      </div>
    </div>
  );
}

export default AllArtCraftSub;
