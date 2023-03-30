import DashboardLayout from "@/components/DashboardLayout";
import { CartItemType } from "@/types";
import React, { useEffect, useState } from "react";

const Order = () => {
  const [orders, setorders] = useState<CartItemType[] | any>();
  useEffect(() => {
    setorders(JSON.parse(localStorage.getItem("cart")));
    console.log(orders);
    orders?.map((order: CartItemType) => console.log(order.name));
  }, []);

  return (
    <DashboardLayout>
      {orders?.map((order: CartItemType) => {
        return <div className="text-black w-36 h-10">{order.name}</div>;
      })}
    </DashboardLayout>
  );
};

export default Order;
