import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-end neutral mt-5 ">
      <div className="flex justify-between pt-10 pb-0 w-10/12 max-md:flex-col max-md:w-full max-w-[1600px] ">
        <div className="text-right text-primary text-lg w-[200px]">
          <Link to={"/"} className="link link-hover pb-3 block">
            Stays
          </Link>
          <Link to={"/Flights"} className="link link-hover pb-3 block">
            Flights
          </Link>
          <Link to={"/CarRantals"} className="link link-hover pb-3 block">
            Car Rantals
          </Link>
          <Link to={"/Attractions"} className="link link-hover pb-3 block">
            Attractions
          </Link>
          <Link to={"/AirportTaxis"} className="link link-hover pb-3 block">
            Airport taxis
          </Link>
        </div>

        <div className="text-right text-primary text-lg w-[200px]">
          <Link to={"/"} className="link link-hover pb-3 block">
            Homes
          </Link>
          <Link to={"/Flightss"} className="link link-hover pb-3 block">
            Apartments
          </Link>
          <Link to={"/CarRantalss"} className="link link-hover pb-3 block">
            Resorts
          </Link>
          <Link to={"/Attractionss"} className="link link-hover pb-3 block">
            Villas
          </Link>
          <Link to={"/AirportTaxiss"} className="link link-hover pb-3 block">
            Guest houses
          </Link>
        </div>

        <div className="text-right text-primary text-lg w-[200px]">
          <Link to={"/"} className="link link-hover pb-3 block">
            Stays
          </Link>
          <Link to={"/Flights"} className="link link-hover pb-3 block">
            Flights
          </Link>
          <Link to={"/CarRantals"} className="link link-hover pb-3 block">
            Car Rantals
          </Link>
          <Link to={"/Attractions"} className="link link-hover pb-3 block">
            Attractions
          </Link>
          <Link to={"/AirportTaxis"} className="link link-hover pb-3 block">
            Airport taxis
          </Link>
        </div>

        <div className="text-right text-primary text-lg w-[200px]">
          <Link to={"/"} className="link link-hover pb-3 block">
            Homes
          </Link>
          <Link to={"/Flightss"} className="link link-hover pb-3 block">
            Apartments
          </Link>
          <Link to={"/CarRantalss"} className="link link-hover pb-3 block">
            Resorts
          </Link>
          <Link to={"/Attractionss"} className="link link-hover pb-3 block">
            Villas
          </Link>
          <Link to={"/AirportTaxiss"} className="link link-hover pb-3 block">
            Guest houses
          </Link>
        </div>
      </div>

      <div className="py-5 text-lg font-bold text-primary w-10/12 text-center max-md:text-base  ">
        © 2023 booking.com | All Rights Reserved.
      </div>
    </footer>
  );
};
