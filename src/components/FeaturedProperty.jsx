import React from "react";
import useFecth from "../hooks/useFetch";
import { GuestChoiceCard } from "./GuestChoiceCard";

export const FeaturedProperty = () => {
  const { data, error, loading } = useFecth(
    "http://localhost:8800/hotels?Featured=true&limit=4"
  );
  console.log(data);
  return loading ? (
    "Loading. Please wait."
  ) : (
    <div className="flex justify-between gap-4">
      {data.map((data, index) => {
        return (
          <GuestChoiceCard
            key={data._id}
            imgUrl={
              "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            }
            name={data.name}
            price={data.cheapestPrice}
            CountryName={data.city}
            rating={9.2}
            review={"Excellent"}
          />
        );
      })}
    </div>
  );
};
