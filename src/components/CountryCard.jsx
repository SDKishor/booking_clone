import React from "react";

export const CountryCard = ({ imgUrl, name, propertiesNum }) => {
  return (
    <div className="rounded-xl h-[400px] min-w-[380px] overflow-hidden relative">
      <img src={imgUrl} alt={name} />
      <h2 className="absolute bottom-[50px] left-4 text-base-100 font-bold text-3xl">
        {name}
      </h2>
      <p className="absolute bottom-[20px] left-4 text-base-100/90 font-bold text-xl">
        {propertiesNum} properties
      </p>
    </div>
  );
};
