import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import {
  FaBed,
  FaCalendarAlt,
  FaCar,
  FaMapMarkerAlt,
  FaPlane,
  FaTaxi,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = ({ homepage = false }) => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [showDateRange, setShowDateRange] = useState(false);
  const [ShowOptions, setShowOptions] = useState(false);

  const [searchOption, setSearchOption] = useState({
    adult: 1,
    childern: 0,
    rooms: 1,
  });

  const handleSearchOption = (name, oparetion) => {
    setSearchOption((prev) => {
      return {
        ...prev,
        [name]:
          oparetion === "i" ? searchOption[name] + 1 : searchOption[name] - 1,
      };
    });
  };
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("list", { state: { destination, date, searchOption } });
  };

  return (
    <header className="w-full flex flex-col items-center py-8 bg-primary text-base-100/90 relative ">
      <nav className="flex w-[1200px] justify-between items-center pb-5">
        <div className="text-2xl font-bold">Booking Clone</div>
        <div className=" flex items-center text-primary">
          <button className="bg-base-100/90 px-5 py-2 mr-5 rounded-sm cursor-pointer">
            Register
          </button>
          <button className="bg-base-100/90 px-5 py-2 mr-5 rounded-sm cursor-pointer">
            Login
          </button>
        </div>
      </nav>
      <div className="flex w-[1200px] ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center h-10 py-5 px-3 border-solid border-base-100/90 border-2 rounded-3xl mr-5 cursor-pointer "
              : "flex items-center h-10 py-5 px-3 mr-5 cursor-pointer "
          }
        >
          <FaBed className="w-10 h-6"></FaBed>
          <span>Stays</span>
        </NavLink>

        <NavLink
          to="/hi"
          className={({ isActive }) =>
            isActive
              ? "flex items-center h-10 py-5 px-3 border-solid border-base-100/90 border-2 rounded-3xl mr-5 cursor-pointer "
              : "flex items-center h-10 py-5 px-3 border-solid border-primary border-2 rounded-3xl mr-5 cursor-pointer "
          }
        >
          <FaPlane className="w-10 h-6"></FaPlane>
          <span>Flights</span>
        </NavLink>

        <NavLink
          to="/hi"
          className={({ isActive }) =>
            isActive
              ? "flex items-center h-10 py-5 px-3 border-solid border-base-100/90 border-2 rounded-3xl mr-5 cursor-pointer "
              : "flex items-center h-10 py-5 px-3 border-solid border-primary border-2 rounded-3xl mr-5 cursor-pointer "
          }
        >
          <FaCar className="w-10 h-6"></FaCar>
          <span>Car Rantals</span>
        </NavLink>

        <NavLink
          to="/hi"
          className={({ isActive }) =>
            isActive
              ? "flex items-center h-10 py-5 px-3 border-solid border-base-100/90 border-2 rounded-3xl mr-5 cursor-pointer "
              : "flex items-center h-10 py-5 px-3 border-solid border-primary border-2 rounded-3xl mr-5 cursor-pointer "
          }
        >
          <FaMapMarkerAlt className="w-10 h-6"></FaMapMarkerAlt>
          <span>Attractions</span>
        </NavLink>

        <NavLink
          to="/hi"
          className={({ isActive }) =>
            isActive
              ? "flex items-center h-10 py-5 px-3 border-solid border-base-100/90 border-2 rounded-3xl mr-5 cursor-pointer "
              : "flex items-center h-10 py-5 px-3 border-solid border-primary border-2 rounded-3xl mr-5 cursor-pointer "
          }
        >
          <FaTaxi className="w-10 h-6"></FaTaxi>
          <span>Airport taxis</span>
        </NavLink>
      </div>

      {homepage && (
        <>
          <div className="w-[1200px] pt-5 pb-16">
            <h2 className="text-4xl font-bold py-3">
              A lifetime of discount? it's Genius
            </h2>
            <p className="text-2xl pb-3 pt-0 ">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free account
            </p>
            <button className="btn btn-secondary  px-5 my-3">
              sign in / Register
            </button>
          </div>

          <div className="flex bg-base-100 px-10 py-4 rounded-md text-gray-400 absolute bottom-[-45px] border-solid border-[5px] border-yellow-400 ">
            <div className="flex items-center pr-5 w-[300px]">
              <FaBed className="w-8 h-5"></FaBed>
              <input
                type="text"
                placeholder="Where are you going?"
                className="input pl-3 h-5/6 w-10/12 text-black"
                onChange={() => setDestination(e.target.value)}
              />
            </div>
            <div className="flex items-center pr-5 w-[300px]">
              <button
                onClick={() => setShowDateRange(!showDateRange)}
                className="flex items-center "
              >
                <FaCalendarAlt className="w-8 h-5 "></FaCalendarAlt>
                <span className="pl-3">
                  {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                    date[0].endDate,
                    "dd/MM/yyyy"
                  )}`}
                </span>
              </button>

              {showDateRange && (
                <DateRange
                  className="absolute top-[80px] "
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              )}
            </div>
            <div className="flex items-center pr-5 w-[300px] relative">
              <button
                className="flex items-center "
                onClick={() => setShowOptions(!ShowOptions)}
              >
                <FaBed className="w-8 h-5"></FaBed>
                <span className="px-3 capitalize">
                  {searchOption.adult} adult {searchOption.childern} childern{" "}
                  {searchOption.rooms} rooms
                </span>
              </button>
              {ShowOptions && (
                <div className="w-[300px] absolute top-[70px] mx-10 p-5 bg-black/5 rounded-md text-black">
                  <div className="flex justify-between items-center mb-5">
                    <div className="text-xl">Adult</div>
                    <div className="flex items-center justify-center w-2/4 h-10">
                      <button
                        disabled={searchOption.adult <= 1}
                        className="flex-1  btn-sm  text-2xl font-bold mx-2"
                        onClick={() => handleSearchOption("adult", "d")}
                      >
                        -
                      </button>
                      <button
                        disabled
                        className="flex-1 text-2xl text-center mx-2 "
                      >
                        {searchOption.adult}
                      </button>
                      <button
                        className="flex-1  btn-sm text-2xl font-bold "
                        onClick={() => handleSearchOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-5">
                    <div className="text-xl">Childern</div>
                    <div className="flex items-center justify-center w-2/4 h-10">
                      <button
                        disabled={searchOption.childern <= 0}
                        className="flex-1  btn-sm  text-2xl font-bold mx-2"
                        onClick={() => handleSearchOption("childern", "d")}
                      >
                        -
                      </button>
                      <button
                        disabled
                        className="flex-1 text-2xl  text-center mx-2 "
                      >
                        {searchOption.childern}
                      </button>
                      <button
                        className="flex-1  btn-sm text-2xl font-bold "
                        onClick={() => handleSearchOption("childern", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center ">
                    <div className="text-xl">Rooms</div>
                    <div className="flex items-center justify-center w-2/4 h-10">
                      <button
                        disabled={searchOption.rooms <= 1}
                        className="flex-1  btn-sm  text-2xl font-bold mx-2"
                        onClick={() => handleSearchOption("rooms", "d")}
                      >
                        -
                      </button>
                      <button
                        disabled
                        className="flex-1 text-2xl  text-center mx-2 "
                      >
                        {searchOption.rooms}
                      </button>
                      <button
                        className="flex-1  btn-sm text-2xl font-bold "
                        onClick={() => handleSearchOption("rooms", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button
              className="btn btn-secondary ml-10"
              onClick={() => handleSearch()}
            >
              search
            </button>
          </div>
        </>
      )}
    </header>
  );
};
