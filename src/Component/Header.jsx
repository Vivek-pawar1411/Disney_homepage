import React, { useState } from "react";
import logo from "../assets/Image/logo.png";
import user from "../assets/Image/user.png";
import {
  HiHome,
  HiStar,
  HiMagnifyingGlass,
  HiTv,
  HiPlayCircle,
} from "react-icons/hi2";
import { HiDotsVertical, HiPlus } from "react-icons/hi";

import Headeritem from "./Headeritem";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCHLIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex  gap-[20px]items-center">
        <img
          src={logo}
          className="w-[80px] mr-[20px]
        md:w-[115px] object-cover"
        />
        <div className="flex gap-[20px] items-center">
          {menu.map((item) => (
            <Headeritem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="hidden gap-[15px] items-center">
          {menu.map(
            (item, index) =>
              index < 3 && <Headeritem name={""} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <Headeritem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div
                className="absolute mt-3  bg-[#121212] 
            border-[1px] border-gray-700 p-[10px] px-5 py-4"
              >
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <Headeritem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src={user}
        alt="profile"
        className=" w-[60px] rounded-full cursor-pointer"
      />
    </div>
  );
};

export default Header;
