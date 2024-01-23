/* eslint-disable react/prop-types */
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product, handleFavoriteClick, favorites }) => {
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
    <div>
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
                  <span className="text-orange-500 font-semibold !leading-none">
                    {calculateDiscountedPrice(product?.price, product?.offer)}
                  </span>
                </div>

                <div className="flex justify-between">
                  {/* Display discounted percentage */}
                  <div className="flex items-center text-sm font-medium mt-2">
                    <span className="text-gray-400 line-through !leading-none">${product?.price}</span>
                    <span className="text-green-500 mx-1">
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
    </div>
  );
};

export default ProductCard;
