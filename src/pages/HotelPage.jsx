import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";

export const HotelPage = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];
  const location = useLocation();
  const hotelId = location.pathname.split("/")[2];
  const { data, error, loading, reFetchData } = useFetch(
    `http://localhost:8800/hotels/find/${hotelId}`
  );

  const { date, searchOption } = useContext(SearchContext);
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const MILLISECOND_PER_DAY = 1000 * 60 * 60 * 24;

  function dayDiff(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECOND_PER_DAY);
    return diffDays;
  }

  const days = dayDiff(date[0].startDate, date[0].endDate);

  const handleBooking = () => {
    if (user) {
    } else {
      navigate("/login");
    }
  };

  return (
    <main className="w-[1200px] relative">
      <button className="absolute top-[20px] right-0 bg-secondary font-bold px-5 py-3 rounded text-base-100/80 ">
        Reserve or Book Now!
      </button>
      <h1 className="mt-5 text-3xl font-bold">{data.name}</h1>
      <div className="flex py-3">
        <FaLocationArrow />
        <span className="px-3 ">{data.address}</span>
      </div>
      <div className="text-xl font-bold pb-3 text-secondary">
        Excellent location – {data.distance}m from center
      </div>
      <div className="text-green-600 font-bold mb-3">
        Book a stay over ${data.cheapestPrice} at this property and get a free
        airport taxi
      </div>
      <div className="flex flex-wrap justify-between gap-1 cursor-pointer">
        {photos.map((photo, i) => (
          <div className="w-[33%] " key={i}>
            <img src={photo.src} alt="" className="w-full" />
          </div>
        ))}
      </div>
      <div className="flex mt-8">
        <div className="w-3/4 ">
          <h1 className="text-3xl font-bold pb-5 capitalize">{data.title}</h1>
          <p className="hotelDesc">{data.desc}</p>
        </div>
        <div className="bg-secondary/20 p-5 rounded  w-1/3 ml-10">
          <h1 className="font-bold text-xl pb-3">
            Perfect for a 9-night stay!
          </h1>
          <div className="">
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </div>
          <h2 className="text-2xl py-5">
            <b>${days * data.cheapestPrice * searchOption.rooms}</b> ({days}{" "}
            nights)
          </h2>
          <button
            className="bg-secondary w-full py-3 font-bold text-base-100/90 rounded"
            onClick={handleBooking}
          >
            Reserve or Book Now!
          </button>
        </div>
      </div>
    </main>
  );
};
