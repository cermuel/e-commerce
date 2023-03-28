import { handleShowNav } from "@/functions";
import React, { useRef, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }: any) => {
  const navRef = useRef();
  const [hamColor, sethamColor] = useState("black");

  return (
    <div className="w-full relative">
      <Navbar navRef={navRef} />
      <HiOutlineMenuAlt3
        className={`fixed top-4 left-4 text-2xl text-[${hamColor}] md:hidden`}
        onClick={() => handleShowNav(navRef, sethamColor)}
      />
      <div className="md:pl-[25%]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
