import BlueDot from "@/public/homePageIcons/Ellipse 1.png";
import StorageIcon from "@/public/homePageIcons/database.png";
import Image from "next/image";
import RefreshIcon from "@/public/homePageIcons/refresh.png";
import AddIcon from "@/public/homePageIcons/plus.png";
import SearchIcon from "@/public/homePageIcons/search.png";
import { HomePageData } from "@/constants/contants";

const page = () => {
  return (
    <div className="border-2 rounded-xl flex flex-1 bg-white flex-col">
      <div className="border-b px-8 max-md:px-4 pt-6 max-md:pt-3 pb-4 flex flex-col gap-3">
        <div className="flex justify-between max-md:flex-col max-md:gap-3">
          <div>
            <p className="text-2xl font-semibold">Repositories</p>
            <p className="text-[14px] font-light">33 total repositories</p>
          </div>

          <div className="flex gap-[12px] text-[14px]">
            <button className="h-fit py-2 px-3 flex border-2 text-[#414651] rounded-lg items-center gap-2">
              <Image
                src={RefreshIcon}
                alt="Refresh Icon"
                width={200}
                height={200}
                className="w-[12px] h-[12px]"
              />{" "}
              Refresh All
            </button>
            <button className="bg-[#1570EF] text-white h-fit py-2 px-3 flex rounded-lg items-center gap-2">
              <Image
                src={AddIcon}
                alt="Add Icon"
                width={200}
                height={200}
                className="w-[12px] h-[12px]"
              />
              Add Repository
            </button>
          </div>
        </div>

        <div className="flex gap-3 items-center border-2 border-[#D5D7DA] p-1 rounded-lg w-fit max-md:w-full">
          <Image
            src={SearchIcon}
            alt="Search Icon"
            width={200}
            height={200}
            className="w-[15px] h-[15px]"
          />
          <input
            type="text"
            className="focus:outline-none focus:border-none"
            placeholder="Search Repositories"
          />
        </div>
      </div>
      <div>
        {HomePageData.map((item, index) => (
          <div
            key={index}
            className={`${
              index !== HomePageData.length - 1 && "border-b-2"
            } px-8 max-md:px-4 py-4 flex flex-col gap-[6px] hover:bg-[#F5F5F5] max-md:gap-5`}
          >
            <div>
              <p className="text-md font-medium flex gap-3 items-center">
                {item.name}{" "}
                <span className="border-2 border-[#B2DDFF] bg-[#EFF8FF]  text-[#175CD3] px-[3px] h-fit text-[10px] rounded-2xl">
                  {item.visible}
                </span>
              </p>
            </div>
            <div className="flex gap-[40px] max-md:gap-5 text-xs text-[#181D27]">
              <p className="flex gap-2 items-center">
                {item.lang}
                <span>
                  <Image
                    src={BlueDot}
                    alt="blue dot"
                    width={200}
                    height={200}
                    className="w-[7px] h-[7px]"
                  />
                </span>
              </p>
              <p className="flex gap-2 items-center">
                <span>
                  <Image
                    src={StorageIcon}
                    alt="Storage Icon"
                    width={200}
                    height={200}
                    className="w-[10px] h-[12px]"
                  />
                </span>
                {item.size}
              </p>
              <p>{item.updated}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default page;
