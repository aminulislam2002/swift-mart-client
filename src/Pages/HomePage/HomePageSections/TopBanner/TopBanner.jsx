/* eslint-disable react/prop-types */
import { LuSearch } from "react-icons/lu";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./KeenSlider.css";

import image1 from "../../../../assets/Banner/3.png";

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
          <div className="keen-slider__slide number-slide1">
            <div className="relative overflow-hidden bg-[#E3FFE6]">
              <div className=" px-[70px]">
                <div className="grid grid-cols-2">
                  <div className="py-[150px]">
                    <h4 className="text-2xl font-medium font-primary text-[#334144] mb-10">
                      In this season, find the best 🔥
                    </h4>
                    <h1 className="text-6xl font-extrabold font-primary mb-10">Exclusive collection for everyone</h1>
                    <button className="bg-black text-white text-2xl font-bold font-primary px-12 py-5 rounded-full flex justify-center items-center gap-2">
                      Explore now
                      <span>
                        <LuSearch></LuSearch>
                      </span>
                    </button>
                  </div>
                  <div className="flex justify-center items-end" data-aos="fade-right">
                    <img src={image1} className="w-[450px] h-[550px]" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <div className="relative overflow-hidden bg-[#E3FFE6]">
              <div className=" px-[70px]">
                <div className="grid grid-cols-2">
                  <div className="py-[150px]">
                    <h4 className="text-2xl font-medium font-primary text-[#334144] mb-10">
                      In this season, find the best 🔥
                    </h4>
                    <h1 className="text-6xl font-extrabold font-primary mb-10">Exclusive collection for everyone</h1>
                    <button className="bg-black text-white text-2xl font-bold font-primary px-12 py-5 rounded-full flex justify-center items-center gap-2">
                      Explore now
                      <span>
                        <LuSearch></LuSearch>
                      </span>
                    </button>
                  </div>
                  <div className="flex justify-center items-end">
                    <img src={image1} className="w-[450px] h-[550px]" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide3">
            <div className="relative overflow-hidden bg-[#E3FFE6]">
              <div className=" px-[70px]">
                <div className="grid grid-cols-2">
                  <div className="py-[150px]">
                    <h4 className="text-2xl font-medium font-primary text-[#334144] mb-10">
                      In this season, find the best 🔥
                    </h4>
                    <h1 className="text-6xl font-extrabold font-primary mb-10">Exclusive collection for everyone</h1>
                    <button className="bg-black text-white text-2xl font-bold font-primary px-12 py-5 rounded-full flex justify-center items-center gap-2">
                      Explore now
                      <span>
                        <LuSearch></LuSearch>
                      </span>
                    </button>
                  </div>
                  <div className="flex justify-center items-end">
                    <img src={image1} className="w-[450px] h-[550px]" alt="" />
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
