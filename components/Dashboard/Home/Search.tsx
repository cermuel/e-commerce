import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SlMicrophone } from "react-icons/sl";
const Search = ({ action }: any) => {
  return (
    <div className="w-full md:px-8 px-2 gap-2 flex justify-between items-center p-2 border-[1px] h-10 md:h-14 rounded-full">
      <AiOutlineSearch />
      <input
        type="text"
        onChange={(e) => action(e)}
        placeholder="Search product by name"
        className="w-full h-full outline-none font-light mb-[2px]"
      />
      <SlMicrophone />
    </div>
  );
};

export default Search;
