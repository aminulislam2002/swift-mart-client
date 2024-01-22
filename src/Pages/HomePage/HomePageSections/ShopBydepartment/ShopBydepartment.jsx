import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiper.css";

import travel_kits from "../../../../assets/ShopBydepartment/travel-kits.png"
import beauty_products from "../../../../assets/ShopBydepartment/beauty-products.png"
import sport_kits from "../../../../assets/ShopBydepartment/sport-kits.png"
import pets_food from "../../../../assets/ShopBydepartment/pets-food.png"
import electronics from "../../../../assets/ShopBydepartment/electronics.png"
import home_decor from "../../../../assets/ShopBydepartment/home-decor.png"

const data = [
  {
    id: 1,
    linkTo: "/link1",
    image: travel_kits,
    department: "Travel Kits",
    products: "500",
    bgColor: "bg-green-100",
  },
  {
    id: 2,
    linkTo: "/link2",
    image: beauty_products,
    department: "Beauty Products",
    products: "500",
    bgColor: "bg-red-100",
  },
  {
    id: 3,
    linkTo: "/link3",
    image: sport_kits,
    department: "Sport Kits",
    products: "500",
    bgColor: "bg-yellow-100",
  },
  {
    id: 4,
    linkTo: "/link4",
    image: pets_food,
    department: "Pets Food",
    products: "500",
    bgColor: "bg-blue-100",
  },
  {
    id: 5,
    linkTo: "/link5",
    image: electronics,
    department: "Electronics",
    products: "500",
    bgColor: "bg-green-100",
  },
  {
    id: 6,
    linkTo: "/link6",
    image: home_decor,
    department: "Home Decor",
    products: "500",
    bgColor: "bg-orange-100",
  },
];

const ShopBydepartment = () => {
  const [swiper, setSwiper] = useState(null);
  const [isBackButtonActive, setIsBackButtonActive] = useState(false);

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

  return (
    <div className="my-24 lg:my-32 mx-5 lg:mx-10">
      {/* Title of this section */}

      <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50">
        <div>
          <h2 className="font-primary text-3xl md:text-4xl font-semibold">
            Shop by department<span>! </span>
            <span className="text-neutral-500 dark:text-neutral-400">Exciting deals await you</span>
          </h2>
        </div>
        <div className="mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0">
          <div className="nc-NextPrev relative flex items-center text-slate-500 dark:text-slate-400">
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
          // slidesPerView={3}
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
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={item.linkTo}>
                <div style={{ width: "276px", marginRight: "16px" }}>
                  <div
                    className={`flex-1 relative w-full rounded-2xl overflow-hidden group aspect-w-1 aspect-h-1 ${item.bgColor}`}
                  >
                    <div className="pt-10">
                      <div className="w-full h-full flex justify-center">
                        <img
                          src={item?.image}
                          className="w-[245px] h-[190px] md:w-[225px] md:h-[170px] lg:w-[275px] lg:h-[220px] "
                          alt={item?.department}
                        />
                      </div>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity rounded-2xl"></span>
                  </div>
                  <div className="mt-5 flex-1 text-center">
                    <h2 className="text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-semibold">
                      {item?.department}
                    </h2>
                    <span className="block mt-0.5 sm:mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
                      {item.products}+ products
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShopBydepartment;
