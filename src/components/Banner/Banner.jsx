import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="text-center relative">
          <img
            src="https://i.ibb.co/vqhYNQ8/pexels-photo-795693-jpeg-cs-srgb-dl-pexels-daniel-ape-795693.jpg"
            alt="Image 1"
            className="object-cover h-80 w-full bg-black"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
            <h1 className="text-4xl font-bold mb-4 bg-lime-50 rounded-xl p-2">
              Welcome to <span className="text-purple-700">ArtisanAura</span>
            </h1>
            <p className="text-xl font-medium text-lime-600">
              Best arts & crafts collections.....
            </p>
            <button className="bg-purple-700 text-white px-4 py-2 rounded-md mt-4 focus:outline-none">
              Explore
            </button>
          </div>
        </div>
        <div className="text-center relative">
          <img
            src="https://i.ibb.co/XZSZSrQ/pexels-photo-6399717-jpeg-cs-srgb-dl-pexels-daejeung-6399717.jpg"
            alt="Image 2"
            className="object-cover h-80 w-full opacity-75"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
            <h1 className="text-4xl font-bold mb-4 bg-lime-50 rounded-xl p-2">
              Welcome to
              <span className="text-purple-700 "> ArtisanAura</span>
            </h1>
            <p className="text-xl font-medium text-lime-600">
              ...Made with Love and Passion
            </p>
            <button className="bg-purple-700 text-white px-4 py-2 rounded-md mt-4 focus:outline-none">
              Explore
            </button>
          </div>
        </div>
        <div className="text-center relative">
          <img
            src="https://i.ibb.co/9rXNC1D/pexels-photo-17157371-jpeg-cs-srgb-dl-pexels-red-zeppelin-17157371.jpg"
            alt="Image 3"
            className="object-cover h-80 w-full opacity-75"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
            <h1 className="text-4xl font-bold mb-4 bg-lime-50 rounded-xl p-2">
              Welcome to <span className="text-purple-700">ArtisanAura</span>
            </h1>
            <p className="text-xl font-medium text-lime-600 rounded-xl p-2">
              Find the art you Love
            </p>
            <button className="bg-purple-700 text-white px-4 py-2 rounded-md mt-4 focus:outline-none">
              Explore
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
