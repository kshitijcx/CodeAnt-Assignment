import BlueDot from "@/public/homePageIcons/Ellipse 1.png";
import StorageIcon from "@/public/homePageIcons/database.png";
import Image from "next/image";
import RefreshIcon from "@/public/homePageIcons/refresh.png";
import AddIcon from "@/public/homePageIcons/plus.png";
import SearchIcon from "@/public/homePageIcons/search.png";

const HomePageData = [
  {
    name: "design-system",
    visible: "Public",
    lang: "React",
    size: "7320 KB",
    updated: "Updated 1 day ago",
  },
  {
    name: "codeant-ci-app",
    visible: "Private",
    lang: "Javascript",
    size: "5871 KB",
    updated: "Updated 2 days ago",
  },
  {
    name: "analytics-dashboard",
    visible: "Private",
    lang: "Python",
    size: "4521 KB",
    updated: "Updated 5 days ago",
  },
  {
    name: "mobile-app",
    visible: "Public",
    lang: "Swift",
    size: "3096 KB",
    updated: "Updated 3 days ago",
  },
  {
    name: "e-commerce-platform",
    visible: "Private",
    lang: "Java",
    size: "6210 KB",
    updated: "Updated 6 days ago",
  },
  {
    name: "blog-website",
    visible: "Public",
    lang: "HTML/CSS",
    size: "1876 KB",
    updated: "Updated 4 days ago",
  },
  {
    name: "social-network",
    visible: "Private",
    lang: "PHP",
    size: "5432 KB",
    updated: "Updated 7 days ago",
  },
];

const page = () => {
  return (
    <div className="border-2 rounded-xl flex flex-1 bg-white flex-col">
      <div className="flex justify-between border-b px-8 pt-6 pb-4">
        <div className="space-y-1">
          <p className="text-2xl font-semibold">Repositories</p>
          <p className="text-[14px]">33 total repositories</p>
          <div className="flex gap-3 items-center border-2 border-[#D5D7DA] p-1 rounded-lg">
            <Image
              src={SearchIcon}
              alt="Search Icon"
              width={200}
              height={200}
              className="w-[15px] h-[15px]"
            />
            <input type="text" className="focus:outline-none focus:border-none" placeholder="Search Repositories"/>
          </div>
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
      <div>
        {HomePageData.map((item, index) => (
          <div
            key={index}
            className={`${
              index !== HomePageData.length - 1 && "border-b-2"
            } px-8 py-4 flex flex-col gap-[6px]`}
          >
            <div>
              <p className="text-md font-medium flex gap-3 items-center">
                {item.name}{" "}
                <span className="border-2 border-[#B2DDFF] bg-[#EFF8FF]  text-[#175CD3] px-[3px] h-fit text-[10px] rounded-2xl">
                  {item.visible}
                </span>
              </p>
            </div>
            <div className="flex gap-[40px] text-xs text-[#181D27]">
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
