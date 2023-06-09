import ErrorPage from "@/components/Dashboard/ErrorPage";
import ProductCard from "@/components/Dashboard/Home/ProductCard";
import Search from "@/components/Dashboard/Home/Search";
import Loader from "@/components/Dashboard/Loader";
import DashboardLayout from "@/components/DashboardLayout";
import { getAllProducts } from "@/functions/api";
import { useRouter } from "next/router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

const Index = () => {
  const [loading, setloading] = useState<boolean>(false);
  const [data, setdata] = useState<any>();
  const [error, seterror] = useState<any | null | undefined>();
  const [search, setsearch] = useState<string>("");
  const router = useRouter();
  useLayoutEffect(() => {
    if (data == undefined) {
      getAllProducts({ setdata, setloading, seterror });
      console.log(data);
    } else {
      console.log(data);
    }
  }, [data]);

  let filteredProducts = data?.products?.filter((product: any) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });
  if (filteredProducts) {
    return (
      <DashboardLayout>
        <section className="my-8"></section>
        <section className="w-full p-4">
          <Search
            action={(e: any) => {
              setsearch(e.target.value);
            }}
          />
        </section>
        <section className="p-4 flex flex-wrap justify-around">
          {filteredProducts.map((product: any) => {
            return (
              <div className="sm:w-[250px] w-[48%]" key={product.id}>
                <ProductCard
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  action={() => router.push(`/dashboard/home/${product.id}`)}
                />
              </div>
            );
          })}
        </section>
      </DashboardLayout>
    );
  } else if (error) {
    return <ErrorPage />;
  } else {
    return <Loader />;
  }
};
export default Index;
