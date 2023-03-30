import { CartItemType } from "@/types";
import Image from "next/image";
import React from "react";

const CartItem = (Item: CartItemType) => {
  return (
    <div className="w-full">
      <div className="flex w-full items-center px-4">
        <div className="flex items-center w-[30%]">
          <Image src={Item.image} alt={Item.name} width={200} height={200} />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <p className="font-bold">{Item.name}</p>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-gray-600">{Item.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
