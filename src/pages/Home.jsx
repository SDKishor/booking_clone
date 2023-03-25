import React from "react";
import { PropertyCard } from "../components/PropertyCard";
import { GuestChoiceCard } from "../components/GuestChoiceCard";
import { Featured } from "../components/Featured";
import { PropertyList } from "../components/PropertyList";
import { FeaturedProperty } from "../components/FeaturedProperty";

export const Home = () => {
  return (
    <>
      <main className="w-[1200px]">
        <section className=" mt-20 flex gap-6 mb-10">
          <Featured />
        </section>
        <section className="mb-10">
          <h1 className=" text-2xl font-bold mb-5">Browse by property type</h1>
          <PropertyList />
        </section>
        <section>
          <h1 className=" text-2xl font-bold mb-5">Homes guests love</h1>
          <FeaturedProperty />
        </section>
      </main>
      <section className="bg-primary text-base-100 w-full h-[350px] flex justify-center items-center text-center mt-8">
        <div className="">
          <h2 className="text-3xl my-3">Save time, save money!</h2>
          <p className="text-xl mb-3">Get new coupons and best deals for you</p>
          <div className="w-[500px] flex items-center ">
            <input
              type="text"
              placeholder="Your Email"
              className="flex-1 mr-2 p-3 rounded-md"
            />
            <button className="btn btn-secondary ">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
};
