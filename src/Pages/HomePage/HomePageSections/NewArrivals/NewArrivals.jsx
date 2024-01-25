// Import necessary dependencies
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./NewArrivals.css";
import { FaStar } from "react-icons/fa6";

// Import images
import LeatherGloves from "../../../../assets/NewArrivals/Leather-Gloves.png";
import WinterJacket from "../../../../assets/NewArrivals/Winter-Jacket.png";
import KnitSweater from "../../../../assets/NewArrivals/Knit-Sweater.png";
import DenimJeans from "../../../../assets/NewArrivals/Denim-Jeans.png";
import Sneakers from "../../../../assets/NewArrivals/Sneakers.png";
import Backpack from "../../../../assets/NewArrivals/Backpack.png";

// Create JSON array of objects
const data = [
  {
    id: 1,
    image: LeatherGloves,
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["green", "yellow", "red"],
    name: "Leather Gloves",
    title: "Perfect mint green",
    price: "$42",
    rating: "4.9",
    reviews: "250",
  },
  {
    id: 2,
    image: WinterJacket,
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["blue", "green", "gray"],
    name: "Winter Jacket",
    title: "Cozy blue",
    price: "$120",
    rating: "4.7",
    reviews: "112",
  },
  {
    id: 3,
    image: KnitSweater,
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["teal", "blue", "lime"],
    name: "Knit Sweater",
    title: "Warm green",
    price: "$80",
    rating: "4.5",
    reviews: "85",
  },
  {
    id: 4,
    image: DenimJeans,
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["indigo", "emerald", "khaki"],
    name: "Denim Jeans",
    title: "Classic blue",
    price: "$65",
    rating: "4.8",
    reviews: "94",
  },
  {
    id: 5,
    image: Sneakers,
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["violet", "blue", "green"],
    name: "Sneakers",
    title: "Sporty red",
    price: "$55",
    rating: "4.6",
    reviews: "102",
  },
  {
    id: 6,
    image: Backpack,
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["black", "gray", "green"],
    name: "Backpack",
    title: "Stylish black",
    price: "$90",
    rating: "4.9",
    reviews: "120",
  },
];

const NewArrivals = () => {
  // State and functions for handling slides
  const [swiper, setSwiper] = useState(null);
  const [isBackButtonActive, setIsBackButtonActive] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleBack = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleForward = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const activateBackButton = () => {
    setIsBackButtonActive(true);
  };

  const activateForwardButton = () => {
    setIsBackButtonActive(false);
  };

  const handleFavoriteClick = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId) ? prevFavorites.filter((id) => id !== productId) : [...prevFavorites, productId]
    );
  };

  return (
    <div className="my-24 lg:my-32 mx-5 lg:mx-10">
      {/* Title of this section */}

      <div className="relative flex flex-col sm:flex-row sm:products-end justify-between mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50">
        <div>
          <h2 className="font-primary text-3xl md:text-4xl font-semibold">
            New Arrivals<span>! </span>
            <span className="text-neutral-500 dark:text-neutral-400">REY backpacks & bags</span>
          </h2>
        </div>
        <div className="mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
          <div className="NextPrev relative flex items-center text-slate-500 dark:text-slate-400">
            <button
              onClick={handleBack}
              onMouseEnter={activateBackButton}
              onFocus={activateBackButton}
              className={`w-10 h-10 mr-2 rounded-full flex items-center justify-center ${
                isBackButtonActive ? "border-2 border-slate-200 dark:border-slate-600" : ""
              }`}
            >
              <IoIosArrowRoundBack className="w-5 h-5"></IoIosArrowRoundBack>
            </button>
            <button
              onClick={handleForward}
              onMouseEnter={activateForwardButton}
              onFocus={activateForwardButton}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                !isBackButtonActive ? "border-2 border-slate-200 dark:border-slate-600" : ""
              }`}
            >
              <IoIosArrowRoundForward className="w-5 h-5"></IoIosArrowRoundForward>
            </button>
          </div>
        </div>
      </div>

      {/* Slider of this section */}

      <div>
        <Swiper
          // slidesPerView={4}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          spaceBetween={30}
          pagination={
            {
              // clickable: true,
            }
          }
          onSwiper={setSwiper}
          className="mySwiper"
        >
          {data.map((product) => (
            <SwiperSlide key={product?.id}>
              <div className="" style={{ width: "276px", marginRight: "16px" }}>
                <div className="flex flex-col bg-transparent">
                  <div className="relative flex-shrink-0 bg-slate-50 dark:bg-slate-300 rounded-3xl overflow-hidden z-[55] group">
                    <Link className="block" to="/product-detail">
                      <div className="flex aspect-w-11 aspect-h-12 w-full">
                        <img
                          alt="product"
                          src={product?.image}
                          className="object-cover w-full h-[300px] overflow-hidden drop-shadow-xl"
                        />
                      </div>
                    </Link>
                    <button
                      className="w-9 h-9 flex items-center justify-center rounded-full dark:bg-slate-900 bg-neutral-400 dark:text-slate-200 shadow-lg absolute top-3 right-3 z-10"
                      onClick={() => handleFavoriteClick(product?.id)}
                    >
                      <MdOutlineFavorite
                        className="w-5 h-5"
                        style={{ color: favorites.includes(product?.id) ? "red" : "white" }}
                      />
                    </button>
                    <div className="absolute bottom-0 inset-x-1 space-x-1.5 flex justify-center opacity-0 invisible group-hover:bottom-4 group-hover:opacity-100 group-hover:visible transition-all">
                      {/* Add your size options here */}
                      {product?.size.map((size) => (
                        <div
                          key={size}
                          className="shadow-lg w-10 h-10 rounded-xl bg-white hover:bg-slate-900 hover:text-white transition-colors cursor-pointer flex items-center justify-center uppercase font-semibold tracking-tight text-sm text-slate-900"
                        >
                          {size}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4 px-2.5 pt-5 pb-2.5">
                    <div className="text-start">
                      <h2 className="text-base font-semibold transition-colors">{product?.name}</h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 ">{product?.title}</p>
                    </div>
                    <div className="flex justify-between products-end">
                      <div>
                        <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                          <span className="text-green-500 !leading-none">{product?.price}</span>
                        </div>
                      </div>
                      <div className="flex items-center mb-0.5">
                        <FaStar className="w-4 h-4 pb-[1px] text-amber-400"></FaStar>
                        <span className="text-sm ml-1 text-slate-500 dark:text-slate-400">
                          {product?.rating} ({product.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
