"use client";
import LogoWithName from "@/public/authPageIcons/LogoWithName.png";
import CloseIcon from "@/public/homePageIcons/close.png";
import MenuIcon from "@/public/homePageIcons/bars.png";
import { NavbarItems, BottomNavItems } from "@/constants/contants";
import Image from "next/image";
import { useState } from "react";

const NavbarSmall = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-white">
        <Image
          src={LogoWithName}
          alt="Logo"
          width={300}
          height={300}
          className="w-[161.5px] h-[32px]"
        />

        {!open && (
          <button onClick={() => setOpen(!open)}>
            <Image
              src={MenuIcon}
              alt="Menu Icon"
              width={300}
              height={300}
              className="w-[15px] h-[15px]"
            />
          </button>
        )}
        {open && (
          <button onClick={() => setOpen(!open)}>
            <Image
              src={CloseIcon}
              alt="Close Icon"
              width={300}
              height={300}
              className="w-[15px] h-[15px]"
            />
          </button>
        )}
      </div>
      {open && (
        <div
          className={`flex flex-col gap-5 ${
            open && "fixed left-0 top-14 h-full w-full bg-black bg-opacity-35"
          }`}
        >
          <div className="space-y-6 h-fit bg-white p-4">
            <select className="border border-gray-600 rounded-md p-2 text-xs font-light w-full">
              <option value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</option>
            </select>
            <div className="flex flex-col">
              <div>
                {NavbarItems.map((item, index) => (
                  <button
                    key={index}
                    className={`${
                      item.name === "Repositories" && "bg-[#1570EF]"
                    } flex gap-3 text-sm font-medium rounded-md py-[10px] px-[14px] w-full`}
                  >
                    <Image
                      src={item.icon}
                      alt="icon"
                      height={300}
                      width={300}
                      className="w-[20.24px] h-[17.97px]"
                    />
                    <p
                      className={`${
                        item.name === "Repositories" && "text-white"
                      }`}
                    >
                      {item.name}
                    </p>
                  </button>
                ))}
              </div>
              <div className="mb-5">
                {BottomNavItems.map((item, index) => (
                  <button
                    key={index}
                    className={`${
                      item.name === "Repositories" && "bg-[#1570EF]"
                    } flex gap-3 text-sm font-medium rounded-md py-[10px] px-[14px]`}
                  >
                    <Image
                      src={item.icon}
                      alt="icon"
                      height={300}
                      width={300}
                      className="w-[20.24px] h-[17.97px] text-white"
                    />
                    <p>{item.name}</p>
                  </button>
                ))}
              </div>
            </div>
            {open && (<div className=""></div>)}
          </div>
        </div>
      )}
    </div>
  );
};
export default NavbarSmall;
