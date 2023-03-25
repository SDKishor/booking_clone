import React from "react";

export const GuestChoiceCard = ({
  imgUrl,
  name,
  CountryName,
  price,
  rating,
  review,
}) => {
  return (
    <div className=" min-w-[280px] max-w-[300px]  overflow-hidden rounded-xl pb-5 ">
      <img className="h-[200px] w-full " src={imgUrl} alt={name} />
      <h2 className="font-bold text-2xl mt-3">{name}</h2>
      <p className="capitalize ">{CountryName}</p>
      <p className="text-xl font-bold capitalize">starting from ${price}</p>
      {rating && (
        <div className="my-4 text-xl">
          <span className="bg-primary text-base-100 px-2 py-3  rounded-md mr-2 font-bold text-base">
            {rating}
          </span>
          {review}
        </div>
      )}
    </div>
  );
};
