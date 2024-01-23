/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFilter } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import ProductCard from "./ProductCard";

// Import images
import DenimJeans from "../../../../assets/NewArrivals/Denim-Jeans.png";

import shoes from "../../../../assets/TrendingNow/shoes.jpeg";
import sunglass from "../../../../assets/TrendingNow/sunglass.jpg";
import BabyCarrierBag from "../../../../assets/TrendingNow/Baby Carrier Bag.jpg";
import WoodenTaptenniscricketbat from "../../../../assets/TrendingNow/Wooden Tap tennis cricket bat.jpeg";
import iphone15 from "../../../../assets/TrendingNow/iphone15.webp";
import MatteMadeInHeaven from "../../../../assets/TrendingNow/MatteMadeInHeaven.webp";

const products = [
  {
    id: 1,
    image: shoes,
    name: "New Trendy Black Color Korean Canvas Sneakers Shoes for Men Slip On Casual Shoes",
    category: "Mans",
    size: ["40", "41", "42", "43"],
    colors: ["green", "yellow", "red"],
    price: "1199",
    offer: "499",
    rating: "4.9",
    reviews: "250",
  },
  {
    id: 2,
    image: sunglass,
    name: "Luxury Brand Design Vintage Rimless Rhinestone Sunglasses Women Men Fashion Gradient Lens Sun Glasses Shades for Female",
    category: "Women",
    size: [],
    colors: ["blue", "green", "gray"],
    price: "752",
    offer: "411",
    rating: "4.7",
    reviews: "112",
  },
  {
    id: 3,
    image: BabyCarrierBag,
    name: "High Quality Baby Carrier Bag (Lying, Facing Mummy, Facing Forward) for 6 Months to 2 Years Baby",
    category: "Kids",
    size: ["M", "L", "XL"],
    colors: ["teal", "blue", "lime"],
    price: "485",
    offer: "249",
    rating: "4.5",
    reviews: "85",
  },
  {
    id: 4,
    image: DenimJeans,
    name: "Denim Jeans",
    category: "Jewelry",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["indigo", "emerald", "khaki"],
    price: "65",
    offer: "30",
    rating: "4.8",
    reviews: "94",
  },
  {
    id: 5,
    image: WoodenTaptenniscricketbat,
    name: "Wooden Tap tennis cricket bat - Cricket bat - Tennis ball cricket bat",
    category: "Sports",
    size: [],
    colors: ["violet", "blue", "green"],
    price: "650",
    offer: "150",
    rating: "4.6",
    reviews: "102",
  },
  {
    id: 6,
    image: MatteMadeInHeaven,
    name: "Absolute New York - Matte Made In Heaven",
    category: "Beauty",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["black", "gray", "green"],
    price: "11",
    offer: "",
    rating: "4.9",
    reviews: "120",
  },
  {
    id: 7,
    image: iphone15,
    name: "iphone 15- 128/256/512GB (USA-LL/A) Smartphone - Unofficial",
    category: "Mobiles & Tablets",
    size: [],
    colors: ["Yellow", "Pink", "Black", "Blue", "green"],
    price: "1200",
    offer: "300",
    rating: "4.9",
    reviews: "120",
  },
];

const TrendingNow = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  const handleFavoriteClick = (productId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(productId) ? prevFavorites.filter((id) => id !== productId) : [...prevFavorites, productId]
    );
  };

  const filteredProducts =
    selectedCategory === "All Items" ? products : products.filter((product) => product.category === selectedCategory);

  const displayedProducts = showAllProducts ? products : filteredProducts.slice(0, 4);

  const handleShowMoreClick = () => {
    setShowAllProducts(true);
  };

  const handleShowLessClick = () => {
    setShowAllProducts(false);
  };

  return (
    <div className="my-24 lg:my-32 mx-5 lg:mx-10">
      {/* Title of this section */}

      <div className="relative mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50">
        <div>
          <h2 className="font-primary text-3xl md:text-4xl font-semibold">
            What's trending now<span>! </span>
          </h2>
          <span className="mt-2 md:mt-4 font-normal block text-base sm:text-lg text-neutral-500 dark:text-neutral-400">
            Discover the most trending products in Swift Mart.
          </span>
        </div>
      </div>

      {/* Product Filter Section */}

      <div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-6 lg:space-y-0 lg:space-x-2 ">
          <nav className="relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar" data-nc-id="Nav">
            <ul className="flex sm:space-x-2">
              <li>
                <button
                  className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-slate-500 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-800 hover:bg-slate-100/75 dark:hover:bg-slate-800 focus:outline-none"
                  onClick={() => setSelectedCategory("All Items")}
                >
                  All items
                </button>
              </li>
              <li>
                <button
                  className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-slate-500 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-800 hover:bg-slate-100/75 dark:hover:bg-slate-800 focus:outline-none"
                  onClick={() => setSelectedCategory("Women")}
                >
                  Women
                </button>
              </li>
              <li>
                <button
                  className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-slate-500 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-800 hover:bg-slate-100/75 dark:hover:bg-slate-800 focus:outline-none"
                  onClick={() => setSelectedCategory("Mans")}
                >
                  Mans
                </button>
              </li>
              <li>
                <button
                  className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-slate-500 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-800 hover:bg-slate-100/75 dark:hover:bg-slate-800 focus:outline-none"
                  onClick={() => setSelectedCategory("Kids")}
                >
                  Kids
                </button>
              </li>
              <li>
                <button
                  className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-slate-500 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-800 hover:bg-slate-100/75 dark:hover:bg-slate-800 focus:outline-none"
                  onClick={() => setSelectedCategory("Sports")}
                >
                  Sports
                </button>
              </li>
              <li>
                <button
                  className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-slate-500 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-800 hover:bg-slate-100/75 dark:hover:bg-slate-800 focus:outline-none"
                  onClick={() => setSelectedCategory("Beauty")}
                >
                  Beauty
                </button>
              </li>
              <li>
                <button
                  className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-slate-500 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-800 hover:bg-slate-100/75 dark:hover:bg-slate-800 focus:outline-none"
                  onClick={() => setSelectedCategory("Jewelry")}
                >
                  Jewelry
                </button>
              </li>
              <li>
                <button
                  className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-slate-500 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-800 hover:bg-slate-100/75 dark:hover:bg-slate-800 focus:outline-none"
                  onClick={() => setSelectedCategory("Mobiles & Tablets")}
                >
                  Mobiles & Tablets
                </button>
              </li>

              {/* <li>
                  <button className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full bg-slate-900 dark:bg-slate-100 text-slate-100 dark:text-slate-900  focus:outline-none">
                    All items
                  </button>
                </li> */}
            </ul>
          </nav>
          <span className="block flex-shrink-0">
            <button
              className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium pl-4 py-2.5 sm:pl-6 disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl w-full !pr-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
              onClick={handleSubmit(onSubmit)}
            >
              <FaFilter className="w-6 h-6" />
              <span className="block truncate ml-2.5">Filter</span>
              <span className="absolute top-1/2 -translate-y-1/2 right-5">
                <FiChevronDown className="w-6 h-6"></FiChevronDown>
              </span>
            </button>
          </span>
        </div>
      </div>

      {/* Products Section */}

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} handleFavoriteClick={handleFavoriteClick} favorites={favorites} />
        ))}
      </div>

      {/* Show more button Section */}
      <div className="flex mt-16 justify-center items-center">
        <button
          className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
          onClick={showAllProducts ? handleShowLessClick : handleShowMoreClick}
        >
          {showAllProducts ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Show less
            </>
          ) : (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Show me more
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default TrendingNow;