/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFilter, FaStar } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

// Import images
import LeatherGloves from "../../../../assets/NewArrivals/Leather-Gloves.png";
import WinterJacket from "../../../../assets/NewArrivals/Winter-Jacket.png";
import KnitSweater from "../../../../assets/NewArrivals/Knit-Sweater.png";
import DenimJeans from "../../../../assets/NewArrivals/Denim-Jeans.png";
import Sneakers from "../../../../assets/NewArrivals/Sneakers.png";
import Backpack from "../../../../assets/NewArrivals/Backpack.png";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    image: LeatherGloves,
    name: "Premium Leather Gloves 2 pcs available are many colors if need do sle",
    category: "Women",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["green", "yellow", "red"],
    title: "Perfect mint green",
    price: "42",
    offer: "30",
    rating: "4.9",
    reviews: "250",
  },
  {
    id: 2,
    image: WinterJacket,
    name: "Winter Jacket",
    category: "Mans",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["blue", "green", "gray"],
    title: "Cozy blue",
    price: "120",
    offer: "30",
    rating: "4.7",
    reviews: "112",
  },
  {
    id: 3,
    image: KnitSweater,
    name: "Knit Sweater",
    category: "Kids",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["teal", "blue", "lime"],
    title: "Warm green",
    price: "80",
    offer: "30",
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
    title: "Classic blue",
    price: "65",
    offer: "30",
    rating: "4.8",
    reviews: "94",
  },
  {
    id: 5,
    image: Sneakers,
    name: "Sneakers",
    category: "Sports",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["violet", "blue", "green"],
    title: "Sporty red",
    price: "55",
    offer: "30",
    rating: "4.6",
    reviews: "102",
  },
  {
    id: 6,
    image: Backpack,
    name: "Backpack",
    category: "Beauty",
    size: ["XS", "S", "M", "L", "XL"],
    colors: ["black", "gray", "green"],
    title: "Stylish black",
    price: "90",
    offer: "30",
    rating: "4.9",
    reviews: "120",
  },
];

const TrendingNow = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
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

  // Add this function outside the component to calculate discounted price
  const calculateDiscountedPrice = (originalPrice, offerPrice) => {
    // Parse the original price as a number
    const price = parseFloat(originalPrice);
    // Parse the offer price as a number
    const offer = parseFloat(offerPrice);
    // Calculate the discounted price
    const discountedPrice = price - offer;
    // Format the discounted price as a string with two decimal places
    return `$${discountedPrice.toFixed(2)}`;
  };

  // Add this function outside the component to calculate discounted percentage
  const calculateDiscountedPercentage = (originalPrice, offerPrice) => {
    // Parse the original price as a number
    const price = parseFloat(originalPrice);
    // Parse the offer price as a number
    const offer = parseFloat(offerPrice);
    // Calculate the discounted percentage
    const discountedPercentage = ((price - offer) / price) * 100;
    // Format the discounted percentage as a string with two decimal places
    return `${discountedPercentage.toFixed(2)}%`;
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

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <div key={product?.id} className="flex flex-col justify-center items-center hover:shadow-md">
            {/* Render filtered product details here */}
            <div className="" style={{ width: "276px", marginRight: "16px" }}>
              <div className="flex flex-col bg-transparent">
                <div className="relative flex-shrink-0 bg-slate-50 dark:bg-slate-300 rounded-3xl overflow-hidden z-[55] group">
                  <Link className="block" to="/product-detail">
                    <div className="flex justify-center items-center aspect-w-11 aspect-h-12 w-full w-w-full h-full">
                      <img
                        alt="product"
                        src={product?.image}
                        className="w-[245px] h-[190px] md:w-[225px] md:h-[170px] lg:w-[275px] lg:h-[220px] "
                      />
                    </div>
                  </Link>
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
                  <div className="text-start flex justify-between">
                    <div>
                      <h2 className="text-base font-semibold transition-colors">
                        {product?.name.length > 45 ? product?.name.slice(0, 45) + "..." : product?.name}
                      </h2>
                    </div>
                    <div className="p-2 rounded-full focus:outline-none">
                      {favorites.includes(product?.id) ? (
                        <>
                          <button onClick={() => handleFavoriteClick(product?.id)}>
                            <MdOutlineFavorite className="w-6 h-6 text-red-600"></MdOutlineFavorite>
                          </button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => handleFavoriteClick(product?.id)}>
                            <MdFavoriteBorder className="w-6 h-6 text-gray-600"></MdFavoriteBorder>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  <div>
                    {/* Display original price with discounted price */}
                    <div className="flex items-center text-2xl font-medium font-primary">
                      <span className="text-green-500 !leading-none">
                        {calculateDiscountedPrice(product?.price, product?.offer)}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      {/* Display discounted percentage */}
                      <div className="flex items-center text-sm font-medium mt-2">
                        <span className="text-gray-400 line-through !leading-none">${product?.price}</span>
                        <span className="text-red-500 mx-1">
                          -{calculateDiscountedPercentage(product?.price, product?.offer)}
                        </span>
                      </div>

                      {/* Display rating and number of reviews of the price */}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNow;
