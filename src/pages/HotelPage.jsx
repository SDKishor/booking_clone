import React from "react";
import { FaLocationArrow } from "react-icons/fa";

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
  return (
    <main className="w-[1200px] relative">
      <button className="absolute top-[20px] right-0 bg-secondary font-bold px-5 py-3 rounded text-base-100/80 ">
        Reserve or Book Now!
      </button>
      <h1 className="mt-5 text-3xl font-bold">Tower Street Apartments</h1>
      <div className="flex py-3">
        <FaLocationArrow />
        <span className="px-3 ">Elton St 125 New york</span>
      </div>
      <div className="text-xl font-bold pb-3 text-secondary">
        Excellent location – 500m from center
      </div>
      <div className="text-green-600 font-bold mb-3">
        Book a stay over $114 at this property and get a free airport taxi
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
          <h1 className="text-3xl font-bold pb-5">Stay in the heart of City</h1>
          <p className="hotelDesc">
            Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
            Street Apartments has accommodations with air conditioning and free
            WiFi. The units come with hardwood floors and feature a fully
            equipped kitchenette with a microwave, a flat-screen TV, and a
            private bathroom with shower and a hairdryer. A fridge is also
            offered, as well as an electric tea pot and a coffee machine.
            Popular points of interest near the apartment include Cloth Hall,
            Main Market Square and Town Hall Tower. The nearest airport is John
            Paul II International Kraków–Balice, 16.1 km from Tower Street
            Apartments, and the property offers a paid airport shuttle service.
          </p>
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
            <b>$945</b> (9 nights)
          </h2>
          <button className="bg-secondary w-full py-3 font-bold text-base-100/90 rounded">
            Reserve or Book Now!
          </button>
        </div>
      </div>
    </main>
  );
};
