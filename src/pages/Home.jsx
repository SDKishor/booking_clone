import React from "react";
import { Header } from "../components/Header";
import { CountryCard } from "../components/CountryCard";
import { PropertyCard } from "../components/PropertyCard";
import { GuestChoiceCard } from "../components/GuestChoiceCard";

export const Home = () => {
  return (
    <>
      <Header homepage={true}></Header>
      <main className="w-[1200px]">
        <section className=" mt-20 flex gap-6 mb-10">
          <CountryCard
            imgUrl={
              "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            }
            name={"Dublin"}
            propertiesNum={123}
          />

          <CountryCard
            imgUrl={
              "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            }
            name={"Dublin"}
            propertiesNum={123}
          />

          <CountryCard
            imgUrl={
              "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            }
            name={"Dublin"}
            propertiesNum={123}
          />
        </section>
        <section className="mb-10">
          <h1 className=" text-2xl font-bold mb-5">Browse by property type</h1>
          <div className="flex justify-between">
            <PropertyCard
              imgUrl={
                "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              }
              name={"Dublin"}
              propertiesNum={123}
            />
            <PropertyCard
              imgUrl={
                "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              }
              name={"Dublin"}
              propertiesNum={123}
            />
            <PropertyCard
              imgUrl={
                "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              }
              name={"Dublin"}
              propertiesNum={123}
            />
            <PropertyCard
              imgUrl={
                "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              }
              name={"Dublin"}
              propertiesNum={123}
            />
            <PropertyCard
              imgUrl={
                "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              }
              name={"Dublin"}
              propertiesNum={123}
            />
          </div>
        </section>
        <section>
          <h1 className=" text-2xl font-bold mb-5">Homes guests love</h1>
          <div className="flex justify-between">
            <GuestChoiceCard
              imgUrl={
                "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              }
              name={"Aoarthotel Stare Miasto"}
              price={230}
              CountryName={"madrid"}
              rating={9.2}
              review={"Excellent"}
            />
            <GuestChoiceCard
              imgUrl={
                "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              }
              name={"Aoarthotel Stare Miasto"}
              price={230}
              CountryName={"madrid"}
              rating={9.2}
              review={"Excellent"}
            />
            <GuestChoiceCard
              imgUrl={
                "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              }
              name={"Aoarthotel Stare Miasto"}
              price={230}
              CountryName={"madrid"}
              rating={9.2}
              review={"Excellent"}
            />
            <GuestChoiceCard
              imgUrl={
                "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              }
              name={"Aoarthotel Stare Miasto"}
              price={230}
              CountryName={"madrid"}
              rating={9.2}
              review={"Excellent"}
            />
          </div>
        </section>
      </main>
      <section className="bg-primary text-base-100 w-full h-[350px] flex justify-center items-center text-center">
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
