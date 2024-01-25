/* eslint-disable react/prop-types */
import { LuSearch } from "react-icons/lu";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./KeenSlider.css";

import image1 from "../../../../assets/Banner/1.png";
import image2 from "../../../../assets/Banner/2.png";
import image3 from "../../../../assets/Banner/3.png";
import image4 from "../../../../assets/Banner/4.png";
import image5 from "../../../../assets/Banner/5.png";

const TopBanner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {/* Slider 1 */}
          <div className="keen-slider__slide number-slide1">
            <div className="relative overflow-hidden ">
              <div className="lg:px-[70px] py-10 px-5 md:py-12 md:px-6">
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-10 md:col-span-10 lg:col-span-6 lg:py-[150px] z-20">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-medium font-primary text-[#334144] mb-5 md:mb-8 lg:mb-10">
                      In this season, find the best 🔥
                    </h4>
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-primary text-slate-900 mb-5 md:mb-8 lg:mb-10">
                      Exclusive collection for everyone
                    </h1>
                    <button className="bg-black text-white text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold font-primary px-5 md:px-8 lg:px-12 py-2 md:py-3 lg:py-5 rounded-full flex justify-center items-center gap-2">
                      Explore now
                      <span>
                        <LuSearch></LuSearch>
                      </span>
                    </button>
                  </div>
                  <div className="col-span-6">
                    <div className="absolute right-0 top-0 lg:relative flex justify-center items-center">
                      <img src={image1} className="w-[300px] h-[300px] lg:w-full lg:h-[650px] " alt="Banner Image 1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider 2 */}

          <div className="keen-slider__slide number-slide2">
            <div className="relative overflow-hidden ">
              <div className="lg:px-[70px] py-10 px-5 md:py-12 md:px-6">
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-10 md:col-span-10 lg:col-span-6 lg:py-[150px] z-20">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-medium font-primary text-[#334144] mb-5 md:mb-8 lg:mb-10">
                      In this season, find the best 🔥
                    </h4>
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-primary text-slate-900 mb-5 md:mb-8 lg:mb-10">
                      Exclusive collection for everyone
                    </h1>
                    <button className="bg-black text-white text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold font-primary px-5 md:px-8 lg:px-12 py-2 md:py-3 lg:py-5 rounded-full flex justify-center items-center gap-2">
                      Explore now
                      <span>
                        <LuSearch></LuSearch>
                      </span>
                    </button>
                  </div>
                  <div className="col-span-6">
                    <div className="absolute right-0 top-0 lg:relative flex justify-center items-center">
                      <img src={image2} className="w-[300px] h-[300px] lg:w-full lg:h-[650px] " alt="Banner Image 2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider 3 */}

          <div className="keen-slider__slide number-slide3">
            <div className="relative overflow-hidden ">
              <div className="lg:px-[70px] py-10 px-5 md:py-12 md:px-6">
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-10 md:col-span-10 lg:col-span-6 lg:py-[150px] z-20">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-medium font-primary text-[#334144] mb-5 md:mb-8 lg:mb-10">
                      In this season, find the best 🔥
                    </h4>
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-primary text-slate-900 mb-5 md:mb-8 lg:mb-10">
                      Exclusive collection for everyone
                    </h1>
                    <button className="bg-black text-white text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold font-primary px-5 md:px-8 lg:px-12 py-2 md:py-3 lg:py-5 rounded-full flex justify-center items-center gap-2">
                      Explore now
                      <span>
                        <LuSearch></LuSearch>
                      </span>
                    </button>
                  </div>
                  <div className="col-span-6">
                    <div className="absolute right-0 top-0 lg:relative flex justify-center items-center">
                      <img src={image3} className="w-[300px] h-[300px] lg:w-full lg:h-[650px] " alt="Banner Image 3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider 4 */}

          <div className="keen-slider__slide number-slide4">
            <div className="relative overflow-hidden ">
              <div className="lg:px-[70px] py-10 px-5 md:py-12 md:px-6">
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-10 md:col-span-10 lg:col-span-6 lg:py-[150px] z-20">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-medium font-primary text-[#334144] mb-5 md:mb-8 lg:mb-10">
                      In this season, find the best 🔥
                    </h4>
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-primary text-slate-900 mb-5 md:mb-8 lg:mb-10">
                      Exclusive collection for everyone
                    </h1>
                    <button className="bg-black text-white text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold font-primary px-5 md:px-8 lg:px-12 py-2 md:py-3 lg:py-5 rounded-full flex justify-center items-center gap-2">
                      Explore now
                      <span>
                        <LuSearch></LuSearch>
                      </span>
                    </button>
                  </div>
                  <div className="col-span-6">
                    <div className="absolute right-0 top-0 lg:relative flex justify-center items-center">
                      <img src={image4} className="w-[300px] h-[300px] lg:w-full lg:h-[650px] " alt="Banner Image 4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider 5 */}

          <div className="keen-slider__slide number-slide5">
            <div className="relative overflow-hidden ">
              <div className="lg:px-[70px] py-10 px-5 md:py-12 md:px-6">
                <div className="grid grid-cols-12 relative">
                  <div className="col-span-10 md:col-span-10 lg:col-span-6 lg:py-[150px] z-20">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-medium font-primary text-[#334144] mb-5 md:mb-8 lg:mb-10">
                      In this season, find the best 🔥
                    </h4>
                    <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-primary text-slate-900 mb-5 md:mb-8 lg:mb-10">
                      Exclusive collection for everyone
                    </h1>
                    <button className="bg-black text-white text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold font-primary px-5 md:px-8 lg:px-12 py-2 md:py-3 lg:py-5 rounded-full flex justify-center items-center gap-2">
                      Explore now
                      <span>
                        <LuSearch></LuSearch>
                      </span>
                    </button>
                  </div>
                  <div className="col-span-6">
                    <div className="absolute right-0 top-0 lg:relative flex justify-center items-center">
                      <img src={image5} className="w-[300px] h-[300px] lg:w-full lg:h-[650px] " alt="Banner Image 5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBanner;
