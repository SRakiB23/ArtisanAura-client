import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import CraftCard from "../components/CraftCard/CraftCard";
import { useState } from "react";

const Home =() => {
  const loadedArts = useLoaderData();
  const [arts, setArts] = useState(loadedArts);
  return (
    <div className="md:max-w-7xl mx-auto">
        <Banner></Banner>
        <div className="">
          <h1 className="text-center font-bold text-3xl py-6">Craft Items</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pl-4">
            {
              arts.map((art) => (
                <CraftCard key={art._id} art={art} arts={arts}
                setArts={setArts}></CraftCard>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Home;