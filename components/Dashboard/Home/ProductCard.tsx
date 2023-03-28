import { formatKoboAmountForDisplay } from "@/functions";
import { ProductCardType } from "@/types";
import React from "react";

const ProductCard = ({ image, name, price, action }: ProductCardType) => {
  return (
    <div
      className="cursor-pointer w-full my-4 rounded-lg h-80 border-2"
      onClick={action}
    >
      <img
        className="h-[80%] rounded-t-md w-full object-cover bg-cover"
        src={image}
        alt={name}
      />
      <div className="px-2 text-input-grey font-light capitalize ">{name}</div>
      <div className="font-semibold px-2">
        {formatKoboAmountForDisplay(Number(price))}
      </div>
    </div>
  );
};

export default ProductCard;
