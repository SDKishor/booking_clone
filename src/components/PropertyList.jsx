import React from "react";
import useFecth from "../hooks/useFetch";
import { PropertyCard } from "./PropertyCard";

export const PropertyList = () => {
  const { data, error, loading } = useFecth(
    "http://localhost:8800/hotels/countByType"
  );

  const PropertyTypeImg = {
    hotel:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    cabin:
      "https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    apartment:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    resort:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    villa:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  };

  return loading ? (
    "Loading. Please wait."
  ) : (
    <div className="flex justify-between gap-4">
      {data.map((data, index) => {
        return (
          <PropertyCard
            key={index}
            imgUrl={PropertyTypeImg[data.type]}
            name={data.type}
            propertiesNum={data.count}
          />
        );
      })}
    </div>
  );
};
