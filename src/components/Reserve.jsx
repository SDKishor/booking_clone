import React from "react";
import useFecth from "../hooks/useFetch";

export const Reserve = ({ hotelId }) => {
  const { data, loading, error } = useFecth(
    `http://localhost:8800/hotels/room/${hotelId}`
  );

  return <div>Reserve</div>;
};
