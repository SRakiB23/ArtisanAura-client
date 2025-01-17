import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import MyArtCraftList from "./MyArtCraftList";
import { AuthContext } from "../../providers/AuthProvider";
import { IoIosArrowDropdown } from "react-icons/io";

const MyArtCraft = (art) => {
  const data = useContext(AuthContext);
  const [artDetails, setArtDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("");

  useEffect(() => {
    setLoading(true);
    if (data?.user?.email)
      fetch(
        `https://artisan-aura-serverside-qgcatct67-sazzad-bashar-rakibs-projects.vercel.app/arts/email/${data.user.email}`
      )
        .then((response) => response.json())
        .then((data) => {
          setArtDetails(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching art details:", error));
  }, [data?.user]);
  console.log(artDetails);

  const handleSort = (value) => {
    setSort(value);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center font-bold text-4xl py-6">My Arts & Crafts.</h1>
      <div className="text-center py-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn bg-yellow-400">
            Sort By Customization <IoIosArrowDropdown className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => handleSort("yes")}>Yes</a>
            </li>
            <li>
              <a onClick={() => handleSort("no")}>No</a>
            </li>
            <li>
              <a onClick={() => handleSort("")}>All</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pl-4">
        {sort
          ? artDetails
              .filter(
                (artDetails) => artDetails.customization.toLowerCase() === sort
              )
              .map((art) => (
                <MyArtCraftList
                  key={art._id}
                  art={art}
                  artDetails={artDetails}
                  setArtDetails={setArtDetails}
                ></MyArtCraftList>
              ))
          : artDetails.map((art) => (
              <MyArtCraftList
                key={art._id}
                art={art}
                artDetails={artDetails}
                setArtDetails={setArtDetails}
              ></MyArtCraftList>
            ))}
      </div>
    </div>
  );
};

export default MyArtCraft;
