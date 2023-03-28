import { ButtonType } from "@/types";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Button = ({ onClick, loading, text }: ButtonType) => {
  return (
    <button
      className={`${
        loading && "opacity-60"
      } cursor-pointer rounded-[64px] bg-pry-color text-white w-full h-16 text-xl text-center flex items-center justify-center`}
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : (
        `${text}`
      )}
    </button>
  );
};

export default Button;
