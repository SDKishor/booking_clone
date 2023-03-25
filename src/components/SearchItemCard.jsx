import React from "react";
import { useNavigate } from "react-router-dom";

export const SearchItemCard = () => {
  const navigate = useNavigate();
  const handleHotelButton = () => {
    navigate("/hotel");
  };
  return (
    <div className="flex p-5 border-solid border-primary/20 border-4 rounded-md mb-5">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="flex-1 w-[200px] h-[200px] object-cover"
      />
      <div className="flex-[2] px-3">
        <h1 className="font-bold text-2xl text-secondary pb-3">
          Tower Street Apartments
        </h1>
        <div className="font-bold pb-2">500m from center</div>
        <div className="bg-green-600 font-bold px-2 py-1 w-fit rounded-md mb-2">
          Free airport taxi
        </div>
        <div className="font-bold mb-2">
          Studio Apartment with Air conditioning
        </div>
        <div>Entire studio • 1 bathroom • 21m² 1 full bed</div>
        <div className="text-green-700 font-bold  py-2">Free cancellation </div>
        <span className="text-green-600">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex flex-1">
          <span className="flex-1 font-bold text-2xl">Excellent</span>
          <button className="bg-primary text-base-100 p-2 font-bold rounded-md h-fit">
            8.9
          </button>
        </div>
        <div className="">
          <div className="text-right font-bold text-2xl mb-3">$112</div>
          <div className="text-right text-primary/50 mb-2">
            Includes taxes and fees
          </div>
          <button
            className="w-full text-center bg-secondary text-base-100 py-3 rounded-md"
            onClick={() => handleHotelButton()}
          >
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};
