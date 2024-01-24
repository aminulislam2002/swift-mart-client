/* eslint-disable react/prop-types */
import { LuSearch } from "react-icons/lu";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./KeenSlider.css";

import image1 from "../../../../assets/Banner/1.png";
import image2 from "../../../../assets/Banner/2.png";
import image3 from "../../../../assets/Banner/3.png";
import image4 from "../../../../assets/Banner/4.png";
import image5 from "../../../../assets/Banner/5.png";

const TopBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  function Arrow(props) {
    const disabled = props.disabled ? " arrow--disabled" : "";
    return (
      <svg
        onClick={props.onClick}
        className={`arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabled}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
        {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
      </svg>
    );
  }

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {/* Slider 1 */}
          <div className="keen-slider__slide number-slide1">
            <div className="relative overflow-hidden bg-[#e3ffe4]">
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
            <div className="relative overflow-hidden bg-[#e3ffe4]">
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
            <div className="relative overflow-hidden bg-[#e3ffe4]">
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
            <div className="relative overflow-hidden bg-[#e3ffe4]">
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
            <div className="relative overflow-hidden bg-[#e3ffe4]">
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

        {loaded && instanceRef.current && (
          <>
            <Arrow left onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()} disabled={currentSlide === 0} />

            <Arrow
              onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

export default TopBanner;
