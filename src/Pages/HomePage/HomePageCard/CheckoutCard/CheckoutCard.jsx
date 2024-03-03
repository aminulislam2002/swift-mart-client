/* eslint-disable react/no-unescaped-entities */
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaTruckArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CheckoutCard = () => {
  return (
    <div className="mb-24 lg:mb-32 mx-5 lg:mx-10">
      <div className="mb-16">
        <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold ">Checkout</h2>
        <div className="block mt-3 sm:mt-5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-400">
          <Link className="hover:underline" to="/">
            Homepage
          </Link>
          <span className="text-xs mx-1 sm:mx-1.5">/</span>
          <Link className="hover:underline" to="">
            Product Details
          </Link>
          <span className="text-xs mx-1 sm:mx-1.5">/</span>
          <span className="underline">Checkout</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-20">
        <div className="col-span-7 border border-slate-200">
          <div className="scroll-mt-24">
            <div className=" dark:border-slate-700 rounded-xl ">
              <div className="p-6 flex flex-col sm:flex-row items-start">
                <span className="hidden sm:block">
                  <FaTruckArrowRight className="w-5 h-5"></FaTruckArrowRight>
                </span>
                <div className="sm:ml-8">
                  <h3 className=" text-slate-700 dark:text-slate-300 flex ">
                    <span className="uppercase">SHIPPING ADDRESS</span>
                    <IoCheckmarkDoneSharp className="w-5 h-5 ms-2"></IoCheckmarkDoneSharp>
                  </h3>
                  <div className="font-semibold mt-1 text-sm">
                    {/* <span className="">St. Paul's Road, Norris, SD 57560, Dakota, USA</span> */}
                  </div>
                </div>
                <button className="py-2 px-4 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 mt-5 sm:mt-0 sm:ml-auto text-sm font-medium rounded-lg">
                  Change
                </button>
              </div>
              <div className="border-t border-slate-200 dark:border-slate-700 px-6 py-7 space-y-4 sm:space-y-6 block">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                  <div>
                    <label className="font-medium text-slate-900 dark:text-slate-200 text-sm" data-nc-id="Label">
                      First name
                    </label>
                    <input
                      className="block w-full border border-slate-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-slate-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-slate-900 disabled:bg-slate-200 dark:disabled:bg-slate-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                      type="text"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="font-medium text-slate-900 dark:text-slate-200 text-sm" data-nc-id="Label">
                      Mobile Number
                    </label>
                    <input
                      className="block w-full border border-slate-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-slate-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-slate-900 disabled:bg-slate-200 dark:disabled:bg-slate-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                      type="number"
                      placeholder="Enter your number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                  <div>
                    <label className="font-medium text-slate-900 dark:text-slate-200 text-sm" data-nc-id="Label">
                      City
                    </label>
                    <input
                      className="block w-full border border-slate-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-slate-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-slate-900 disabled:bg-slate-200 dark:disabled:bg-slate-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                      type="text"
                      placeholder="Enter your city name"
                    />
                  </div>
                  <div className="">
                    <label className="font-medium text-slate-900 dark:text-slate-200 text-sm" data-nc-id="Label">
                      Address
                    </label>
                    <input
                      className="block w-full border border-slate-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-slate-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-slate-900 disabled:bg-slate-200 dark:disabled:bg-slate-800 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                      placeholder="Enter your address"
                      type="text"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-medium text-slate-900 dark:text-slate-200 text-sm" data-nc-id="Label">
                    Address type
                  </label>
                  <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    <div className="flex items-center text-sm sm ">
                      <input
                        id="Address-type-home"
                        className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                        type="radio"
                        value="Address-type-home"
                        checked=""
                        name="Address-type"
                      />
                      <label className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">
                        <span className="text-sm font-medium">
                          Home <span className="font-light">(All Day Delivery)</span>
                        </span>
                      </label>
                    </div>
                    <div className="flex items-center text-sm sm ">
                      <input
                        id="Address-type-office"
                        className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-6 h-6"
                        type="radio"
                        value="Address-type-office"
                        name="Address-type"
                      />
                      <label className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none">
                        <span className="text-sm font-medium">
                          Office
                          <span className="font-light">
                            (Delivery <span className="font-medium">9 AM - 5 PM</span>)
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row pt-6">
                  <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm font-medium py-3 px-4 sm:py-3.5 sm:px-6 disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50 dark:text-slate-800 shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                    Save and Confirm Order
                  </button>
                  <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm font-medium py-3 px-4 sm:py-3.5 sm:px-6 text-slate-700 dark:bg-slate-900 dark:text-slate-300 bg-gray-100 dark:hover:bg-slate-800 mt-3 sm:mt-0 sm:ml-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-5 border border-slate-200 rounded-xl overflow-hidden">
          <div className="border-b">
            <h3 className="text-lg font-semibold p-6">Order summary</h3>
          </div>

          <div className="flex py-7 first:pt-0 last:pb-0">
            <div className="h-36 w-24 sm:w-28 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100 relative">
              <img src="/path/to/product-image.jpg" alt="Product Image" className="w-full h-full object-cover" />
              <a className="absolute inset-0" href="/product-detail"></a>
            </div>

            <div className="ml-3 sm:ml-6 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between">
                  <div className="flex-[1.5]">
                    <h3 className="text-base font-semibold">
                      <a href="/product-detail" className="text-primary-6000 hover:underline">
                        Rey Nylon Backpack
                      </a>
                    </h3>
                    <div className="mt-1.5 sm:mt-2.5 flex text-sm text-slate-600 dark:text-slate-300">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-gray-700">Black</span>
                      </div>
                      <span className="mx-4 border-l border-slate-200 dark:border-slate-700 "></span>
                      <div className="flex items-center space-x-1.5">
                        <span>2XL</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden flex-1 sm:flex justify-end items-center">
                    <div className="border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium text-green-500">
                      $74
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex mt-auto pt-4 items-end justify-between text-sm">
                <button className="flex items-center mt-3 font-medium text-primary-6000 hover:text-primary-500 text-sm ">
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCard;
