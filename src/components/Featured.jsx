import React from "react";
import useFecth from "../hooks/useFetch";
import { CountryCard } from "./CountryCard";

export const Featured = () => {
  const { data, error, loading } = useFecth(
    "http://localhost:8800/hotels/countBycity?cities=dhaka,berlin,india"
  );

  return loading ? (
    "Loading. Please wait"
  ) : (
    <>
      <CountryCard
        imgUrl={
          "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
        }
        name={"Dhaka"}
        propertiesNum={data[0]}
      />

      <CountryCard
        imgUrl={
          "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
        }
        name={"Berlin"}
        propertiesNum={data[1]}
      />

      <CountryCard
        imgUrl={
          "https://images.unsplash.com/photo-1586724229931-cd4cd3b50ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
        }
        name={"India"}
        propertiesNum={data[2]}
      />
    </>
  );
};
