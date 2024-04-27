import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import MyArtCraftList from "./MyArtCraftList";
import { AuthContext } from "../../providers/AuthProvider";

const MyArtCraft = (art) => {
  const data = useContext(AuthContext);
  console.log(data);
  const [artDetails, setArtDetails] = useState();

  useEffect(() => {
    if (data?.user?.email)
      fetch(`http://localhost:3000/arts/email/${data?.user.email}`)
        .then((response) => response.json())
        .then((data) => setArtDetails(data))
        .catch((error) => console.error("Error fetching art details:", error));
  }, [data?.user]);
  console.log(artDetails);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center font-bold text-4xl py-6">My Arts & Crafts.</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pl-4">
        {artDetails?.map((art) => (
          <MyArtCraftList key={art.email} art={art}></MyArtCraftList>
        ))}
      </div>
    </div>
  );
};

export default MyArtCraft;
