import React from "react";

function ExtraSectionTwo() {
  return (
    <div>
      <h2 className="text-center font-bold text-4xl py-6">From The Blog</h2>
      <div className="sm: pl-8 md:grid grid-cols-2 lg:grid-cols-3 justify-around mb-6">
        <div>
          <div className="card w-96 bg-base-100 shadow-xl h-full">
            <figure>
              <img
                className="w-full h-64"
                src="https://i.ibb.co/jkJj3CQ/blog2-1.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className=" text-center font-bold text-2xl">
                10 Must-Try DIY Crafts for Beginners!
              </h2>
              <p className="text-start">
                Dive into the world of DIY crafting with these easy and fun
                projects perfect for beginners...!
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Arts & Crafts</div>
                <div className="badge badge-outline">Products</div>
              </div>
              <p className="text-end font-medium py-2">April 15, 2024</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl h-full">
            <figure>
              <img
                className="w-full h-64"
                src="https://i.ibb.co/YRhkz6v/summer-arts-and-crafts-for-kids-square.png"
                alt="card1"
              />
            </figure>
            <div className="card-body">
              <h2 className=" text-center font-bold text-2xl">
                "The Therapeutic Benefits of Art and Craft Activities"
              </h2>
              <p className="text-start">
                Explore the healing power of art and craft activities and their
                positive impact on mental health and well-being. Discover...!
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Arts & Crafts</div>
                <div className="badge badge-outline">Products</div>
              </div>
              <p className="text-end font-medium py-2">March 7, 2024</p>
            </div>
          </div>
        </div>
        <div>
          <div className="card w-96 h-full bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-96 h-64"
                src="https://i.ibb.co/vskYxk5/images-q-tbn-ANd9-Gc-S4ad-DQDzy7-U175n71d8-G4o0-Rz-LZs65-Qw1-BIrfm-Bjtcjm-K8v-e-RKd-Ye-Zite-Dj55-Kh.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className=" text-center font-bold text-2xl">
                "Mastering the Art of Handmade Jewelry: Tips and Techniques"
              </h2>
              <p className="text-start">
                Delve into the world of handmade jewelry making and learn
                essential tips and techniques to create stunning pieces...!
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Arts & Crafts</div>
                <div className="badge badge-outline">Jewelry</div>
              </div>
              <p className="text-end font-medium py-2">April 2, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExtraSectionTwo;
