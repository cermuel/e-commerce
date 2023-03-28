import Image from "next/image";
import React from "react";

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <Image width={300} height={300} src="/error.svg" alt="An Error Occured" />
      <div className="text-[#302EA7] font-semibold text-3xl my-8">
        OOPS!!! An Error Occured
      </div>
      {/* <ul className="text-center mb-8">
        <li className="text-[#6865ea] font-semibold">
          List of possible errors
        </li>
        <li className="text-input-grey">Network Error</li>
        <li className="text-input-grey">Internal Server Error</li>
      </ul> */}
      <>
        <div
          className="bg-[#302EA7] text-white w-80 h-10 rounded-lg flex justify-center items-center text-lg cursor-pointer"
          onClick={() => {
            window?.location?.reload();
          }}
        >
          Try Reloading
        </div>
        <div className="text-input-grey text-xs">
          Try connecting top internet and reload page again!
        </div>
        <div className="text-pry-color underline text-xs">Didn't work?</div>
      </>
    </div>
  );
};

export default ErrorPage;
