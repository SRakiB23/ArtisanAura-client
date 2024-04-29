import React from "react";
import CountUp from "react-countup";

function ExtraSectionOne() {
  return (
    <div className="max-w-7xl mx-auto p-8 my-8 bg-gradient-to-l from-purple-800 via-red-400">
      <div className="md:flex gap-8">
        <div className="md:w-[440px]">
          <img src="https://i.ibb.co/cNkpkY3/image-5.jpg" alt="" />
        </div>
        <div>
          <h2 className="text-4xl font-bold py-6">
            "Creative Minds <br />
            Crafting Beautiful" -
          </h2>
          <div className="md:flex justify-around gap-10">
            <p className="p-8 border w-40 text-xl font-medium bg-amber-400">
              <CountUp className="text-3xl font-bold" end={100} duration={15} />
              <br />
              Exhibitation
            </p>
            <p className="p-8 border w-40 text-xl font-medium bg-orange-400">
              <CountUp className="text-3xl font-bold" end={500} duration={15} />
              <br />
              Visitors
            </p>
            <p className="p-8 border w-40 text-xl font-medium bg-green-400">
              <CountUp className="text-3xl font-bold" end={80} duration={15} />
              <br />
              Awards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtraSectionOne;
