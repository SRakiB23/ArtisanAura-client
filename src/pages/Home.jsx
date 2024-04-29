import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import CraftCard from "../components/CraftCard/CraftCard";
import { useState } from "react";
import AllArtCraftSub from "./AllArtCraftSub/AllArtCraftSub";
import ExtraSectionOne from "../components/ExtraSectionOne";
import ExtraSectionTwo from "../components/ExtraSectionTwo";
import { Fade, Slide } from "react-awesome-reveal";

const Home = () => {
  const loadedArts = useLoaderData();
  const [arts, setArts] = useState(loadedArts);
  return (
    <div className="md:max-w-7xl mx-auto">
      <Banner></Banner>
      <div className="">
        <Slide triggerOnce delay={500}>
          <h2
            className="text-center text-3xl font-bold py-6 mt-8 rounded-2xl my-4
      bg-gradient-to-r from-blue-400 via-yellow-400 to-red-300"
          >
            Arts & Crafts Items
          </h2>
        </Slide>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pl-4">
          {arts.slice(0, 6).map((art) => (
            <CraftCard
              key={art._id}
              art={art}
              arts={arts}
              setArts={setArts}
            ></CraftCard>
          ))}
        </div>
      </div>
      <AllArtCraftSub></AllArtCraftSub>
      <ExtraSectionOne></ExtraSectionOne>
      <ExtraSectionTwo></ExtraSectionTwo>
    </div>
  );
};

export default Home;
