import ErrorPage from "@/components/Dashboard/ErrorPage";
import Progress from "@/components/Dashboard/Home/ProgressBar";
import ReviewCard from "@/components/Dashboard/Home/ReviewCard";
import Loader from "@/components/Dashboard/Loader";
import DashboardLayout from "@/components/DashboardLayout";
import { formatKoboAmountForDisplay } from "@/functions";
import { getSingleProduct } from "@/functions/api";
import { useRouter } from "next/router";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { CartItemType } from "@/types";
import { addToCart, removeFromCart } from "@/store/reducers/cartReducer";
import { toast, Toaster } from "react-hot-toast";

const SingleProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setdata] = useState<any>();
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  const [showRatings, setshowRatings] = useState(false);
  const [isAdded, setisAdded] = useState(false);
  const [cartItem, setcartItem] = useState<CartItemType>({
    name: "",
    image: "",
    product: "",
    price: 0,
    amount: 0,
  });

  const dispatch = useDispatch();
  // const cart = useSelector((state: any) => state.cart);
  // // useEffect(() => {
  // //   console.log(cart);
  // // }, [isAdded]);

  const addToMyCart = async () => {
    if (data.product) {
      setcartItem({
        name: data?.product?.name,
        image: data?.product?.image,
        product: data?.product?.id,
        price: data?.product?.price,
        amount: 1,
      });
      setisAdded(true);
      await dispatch(addToCart(cartItem));
    }
  };

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
        <div className="pb-8">
          <Toaster />
          <div
            onClick={() => addToMyCart()}
            className="gap-2 fixed rounded-full text-white w-40 h-8 top-1 right-1 bg-pry-color max-md:hidden flex items-center justify-center cursor-pointer"
          >
            <div className="h-[95%] w-7 bg-white flex items-center justify-center rounded-full">
              {isAdded ? (
                <AiOutlineCheck className="text-pry-color text-xl" />
              ) : (
                <BsCart3 className="text-pry-color text-xl" />
              )}
            </div>
            Add To Cart
          </div>

          <div className="w-full h-80 px-4 mt-12">
            <img
              src={data.product.image}
              alt=""
              className="w-full h-full object-cover rounded-lg bg-cover"
            />
          </div>
          <div className="px-4 text-3xl max-sm:text-2xl mt-2 capitalize font-semibold">
            {data.product.name}
          </div>
          <div>
            <div className="font-semibold px-4 mb-4 text-pry-color">
              {formatKoboAmountForDisplay(Number(`${data.product.price}00`))}
            </div>
          </div>
          <div className="px-4 font-light text-input-grey">
            {data.product.description}
          </div>
          <div className="flex px-4 items-center my-4 gap-4">
            <Progress
              percentage={data.product.averageRating}
              strokeWidth={10}
            />
            <div
              className={`text-xs font-medium ${
                data.product.freeShipping
                  ? "bg-[#58e816]"
                  : "bg-[#dd3214] cursor-no-drop"
              } py-1 px-2 rounded-full text-white`}
            >
              {data.product.freeShipping
                ? "Free shipping: Yes"
                : "Free shipping: No"}
            </div>
            <div
              onClick={() => setshowRatings(!showRatings)}
              className="flex text-sm text-input-grey items-center cursor-pointer gap-1"
            >
              {showRatings ? "Hide" : "Show"} Ratings
              {showRatings ? (
                <BiHide className="text-lg" />
              ) : (
                <BiShow className="text-lg" />
              )}
            </div>
          </div>
          {showRatings && (
            <>
              {data.product.reviews.length > 0 ? (
                <div className="w-full flex flex-wrap">
                  {data.product.reviews.map((review: any) => {
                    return (
                      <div className="mx-4 w-[30%] max-sm:w-full my-4 max-md:w-[45%]">
                        <ReviewCard
                          comment={review.comment}
                          rating={review.rating}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="px-4 text-xl font-semibold text-input-grey ">
                  No ratings available
                </div>
              )}
            </>
          )}

          <div
            onClick={() => {
              addToMyCart();
            }}
            className="fixed gap-2 rounded-full text-white w-40 h-10 bottom-4 left-[50%] translate-x-[-50%]  bg-pry-color md:hidden flex items-center justify-center cursor-pointer"
          >
            <div className="h-[95%] w-10 bg-white flex items-center justify-center rounded-full">
              {isAdded ? (
                <AiOutlineCheck className="text-pry-color text-xl" />
              ) : (
                <BsCart3 className="text-pry-color text-xl" />
              )}
            </div>
            Add To Cart
          </div>
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
