import ErrorPage from "@/components/Dashboard/ErrorPage";
import Loader from "@/components/Dashboard/Loader";
import DashboardLayout from "@/components/DashboardLayout";
import { getSingleProduct } from "@/functions/api";
import { useRouter } from "next/router";
import React, { useLayoutEffect, useState } from "react";

const SingleProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setdata] = useState<any>();
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

  useLayoutEffect(() => {
    if (id) {
      if (!data) {
        getSingleProduct({ setdata, setloading, seterror, id });
        console.log(data);
      } else {
        console.log(data.product);
      }
    }
  }, [data, id]);
  if (data) {
    return (
      <DashboardLayout>
        <div className="w-full h-80 px-4 my-12">
          <img
            src={data.product.image}
            alt=""
            className="w-full h-full object-cover rounded-lg bg-cover"
          />
        </div>
      </DashboardLayout>
    );
  } else if (error) {
    return <ErrorPage />;
  } else {
    return <Loader />;
  }
};

export default SingleProduct;
