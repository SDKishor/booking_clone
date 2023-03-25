import React from "react";

export const PropertyCard = ({ imgUrl, name, propertiesNum }) => {
  return (
    <div className=" min-w-[220px] max-w-[250px] overflow-hidden rounded-xl">
      <img className="h-[200px] w-full " src={imgUrl} alt={name} />
      <h2 className="font-bold text-2xl mt-3 capitalize">{name}</h2>
      <p className=" text-xl">
        {propertiesNum} {name}
      </p>
    </div>
  );
};
