import { format } from "date-fns";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchItemCard } from "../components/SearchItemCard";
import useFecth from "../hooks/useFetch";

export const ListPage = () => {
  const location = useLocation();
  const [date, setDate] = useState(location.state.date);
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.searchOption);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(9999);

  const handleOptions = (name, value) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // console.log(location.state);

  const { data, loading, error, reFetchData } = useFecth(
    `http://localhost:8800/hotels?city=${destination}&min=${minPrice}&max=${maxPrice}`
  );

  return (
    <>
      <main className="w-[1200px] flex my-10">
        <div className="flex-1 bg-secondary h-fit p-5 rounded-md">
          <div className="text-2xl font-bold pb-2">Search</div>
          <div className="  pb-2 text-base-100/90">Destination</div>
          <input
            type="text"
            className="w-full h-12 rounded-sm mb-2 px-3 font-bold"
            placeholder={destination}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <div className="  pb-2 text-base-100/90">chack-in Date</div>
          <div className="w-full h-12 rounded-sm mb-2 bg-base-100 flex items-center px-3 font-bold">{`${format(
            date[0].startDate,
            "dd/MM/yyyy"
          )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</div>
          <div className="  pb-2 text-black/70 font-bold text-xl">Options</div>
          <div className=" px-3">
            <div className="capitalize flex items-center mb-2 text-base-100/90">
              <span className="flex-1">
                min price <small>per nignt</small>
              </span>
              <input
                type="number"
                className="w-[60px] border-primary/50 border-2 border-solid rounded text-right px-3 py-1 text-primary"
                placeholder="0"
                onChange={(e) => setMinPrice(e.target.value)}
              />
            </div>
            <div className="capitalize flex items-center mb-2 text-base-100/90">
              <span className="flex-1">
                max price <small>per nignt</small>
              </span>
              <input
                type="number"
                className="w-[60px] border-primary/50 border-2 border-solid rounded text-right px-3 py-1 text-primary"
                placeholder="0"
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <div className="capitalize flex items-center mb-2 text-base-100/90">
              <span className="flex-1">Adult</span>
              <input
                type="number"
                className="w-[60px] border-primary/50 border-2 border-solid rounded text-right px-3 py-1 text-primary"
                placeholder="0"
                value={options.adult}
                onChange={(e) => handleOptions("adult", e.target.value)}
              />
            </div>
            <div className="capitalize flex items-center mb-2 text-base-100/90">
              <span className="flex-1">childern</span>
              <input
                type="number"
                className="w-[60px] border-primary/50 border-2 border-solid rounded text-right px-3 py-1"
                placeholder={options.childern}
                onChange={(e) => handleOptions("childern", e.target.value)}
              />
            </div>
            <div className="capitalize flex items-center mb-2 text-base-100/90">
              <span className="flex-1">rooms</span>
              <input
                type="number"
                className="w-[60px] border-primary/50 border-2 border-solid rounded text-right px-3 py-1 text-primary"
                placeholder={options.rooms}
                onChange={(e) => handleOptions("rooms", e.target.value)}
              />
            </div>
          </div>
          <div className=" w-full flex justify-center mt-5">
            <button onClick={() => reFetchData()} className="btn w-2/3">
              Search
            </button>
          </div>
        </div>
        <div className="flex-[3] pl-5">
          {loading
            ? "loading. Please wait."
            : data.map((item) => <SearchItemCard key={item._id} item={item} />)}
        </div>
      </main>
    </>
  );
};
