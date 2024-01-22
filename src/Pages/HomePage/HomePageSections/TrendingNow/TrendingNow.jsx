/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { FaFilter } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

const TrendingNow = () => {
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  const handleProductsFilter = (value) => {
    if (value === "All Items") {
      console.log("All Product show");
    } else if (value === "Kids") {
      console.log("all kids products here");
    }
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

      {/* Products section */}

      <div>
        <div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-6 lg:space-y-0 lg:space-x-2 ">
            <nav className="relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar" data-nc-id="Nav">
              <ul className="flex sm:space-x-2">
                <li>
                  <button
                    className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-slate-500 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-800 hover:bg-slate-100/75 dark:hover:bg-slate-800 focus:outline-none"
                    onClick={() => handleProductsFilter("All Items")}
                  >
                    All items
                  </button>
                </li>
                <li>
                  <button
                    className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-slate-500 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-800 hover:bg-slate-100/75 dark:hover:bg-slate-800 focus:outline-none"
                    onClick={() => handleProductsFilter("Jewels")}
                  >
                    Jewels
                  </button>
                </li>
                <li>
                  <button
                    className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-slate-500 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-800 hover:bg-slate-100/75 dark:hover:bg-slate-800 focus:outline-none"
                    onClick={() => handleProductsFilter("Women")}
                  >
                    Women
                  </button>
                </li>
                <li>
                  <button
                    className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-slate-500 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-800 hover:bg-slate-100/75 dark:hover:bg-slate-800 focus:outline-none"
                    onClick={() => handleProductsFilter("Mans")}
                  >
                    Mans
                  </button>
                </li>
                <li>
                  <button
                    className="block !leading-none font-medium whitespace-nowrap px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full text-slate-500 dark:text-slate-400 dark:hover:text-slate-100 hover:text-slate-800 hover:bg-slate-100/75 dark:hover:bg-slate-800 focus:outline-none"
                    onClick={() => handleProductsFilter("Kids")}
                  >
                    Kids
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
      </div>
    </div>
  );
};

export default TrendingNow;
