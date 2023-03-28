import { InputType } from "@/types";
import React, { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

const Input = ({ type, text, action, value, error }: InputType) => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <div className="w-full my-2">
      <label className="text-input-grey">{text}</label>
      <div className="w-full h-16 relative">
        <input
          type={type != "password" ? type : showPassword ? "text" : "password"}
          className={`w-full outline-none focus:border-[1px] active:border-[1px] border-input-grey border-[1px] rounded-xl text-[#111719]  h-16 px-3 ${
            error && error == true
              ? "border-[#ec0000] text-[#ec0000]"
              : "focus:text-pry-color focus:border-pry-color"
          }`}
          autoComplete="true"
          onChange={(e) => action(e)}
          value={value}
        />
        {type == "password" &&
          (showPassword ? (
            <RxEyeOpen
              className="absolute right-4 translate-y-[-50%] top-[50%] cursor-pointer animate-pulse"
              onClick={() => setshowPassword(!showPassword)}
            />
          ) : (
            <RxEyeClosed
              className="absolute right-4 translate-y-[-50%] top-[50%] cursor-pointer animate-pulse"
              onClick={() => setshowPassword(!showPassword)}
            />
          ))}
      </div>
    </div>
  );
};

export default Input;
