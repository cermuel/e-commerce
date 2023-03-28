import Image from "next/image";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaUsers, FaHeart, FaArrowRight, FaPowerOff } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { handleLogout } from "@/functions/api";
import { Toaster } from "react-hot-toast";

const Navbar = ({ navRef }: any) => {
  const router = useRouter();
  const logoutUser = () => router.push("/");
  const navLinks = [
    {
      name: "Home",
      link: "home",
      svg: () => {
        return <RxDashboard />;
      },
    },
    {
      name: "My Profile",
      link: "profile",
      svg: () => {
        return <FaUsers />;
      },
    },
    {
      name: "My Orders",
      link: "order",
      svg: () => {
        return <FaHeart />;
      },
    },
  ];
  return (
    <div
      ref={navRef}
      className="top-0 left-0 py-10 h-screen max-md:hidden border-r-[1px] border-gray-400 bg-pry-color w-[25%] max-md:w-[70%] max-sm:w-[80%] fixed flex flex-col items-center"
    >
      <Toaster />
      <img
        // width={100}
        // height={100}
        className="rounded-full h-28 w-28"
        src={"https://img.icons8.com/bubbles/2x/guest-male.png"}
        alt="User"
      />
      <section className="flex flex-col mt-10 gap-2 w-full">
        {navLinks.map((link, key) => {
          const activeRoute =
            router.pathname === `/dashboard/${link.link}` ||
            (router.pathname === "/dashboard" && link.link === "");

          return (
            <Link href={`/dashboard/${link.link}`} key={key} className="w-full">
              <div
                className={`flex items-center gap-4 capitalize w-full h-[68px] text-lg font-semibold cursor-pointer ${
                  activeRoute
                    ? "text-[white] px-4 border-r-[10px] border-[white]"
                    : "text-[white] px-4"
                }`}
              >
                <div className="text-[24px]">{link.svg()}</div>
                <div
                  className={`${
                    activeRoute ? "text-[white]" : "text-[white] font-normal"
                  }`}
                >
                  {link.name}
                </div>
              </div>
            </Link>
          );
        })}
      </section>
      <div
        className="bg-[white] mx-4 text-pry-color rounded-full px-4 py-2 mt-auto cursor-pointer mr-auto flex items-center justify-between w-[100px] shadow-lg active:shadow-none"
        onClick={() => handleLogout(logoutUser)}
      >
        <FaPowerOff /> Logout
      </div>
    </div>
  );
};

export default Navbar;
