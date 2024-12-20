import LogoWithName from "@/public/authPageIcons/LogoWithName.png";
import { NavbarItems } from "@/constants/contants";
import { BottomNavItems } from "@/constants/contants";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center w-full gap-6">
      <Image
        src={LogoWithName}
        alt="Logo with name"
        width={300}
        height={300}
        className="w-[161.5px] h-[32px] mt-5"
      />
      <div>
        <select className="border border-gray-600 rounded-md p-2 text-xs font-light">
          <option value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</option>
        </select>
      </div>
      <div className="flex flex-col h-screen justify-between">
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
              <p className={`${item.name === "Repositories" && "text-white"}`}>
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
              } flex gap-3 text- font-medium rounded-md py-[10px] px-[14px]`}
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
    </div>
  );
};
export default Navbar;
