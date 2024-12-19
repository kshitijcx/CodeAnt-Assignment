import HomeIcon from "@/public/homePageIcons/home.png";
import CodeIcon from "@/public/homePageIcons/code.png";
import CloudIcon from "@/public/homePageIcons/cloud.png";
import HowToIcon from "@/public/homePageIcons/book.png";
import SettingsIcon from "@/public/homePageIcons/gear.png";
import PhoneIcon from "@/public/homePageIcons/phone.png";
import SignOutIcon from "@/public/homePageIcons/sign-out.png";
import LogoWithName from "@/public/authPageIcons/LogoWithName.png";
import Image from "next/image";

const NavbarItems = [
  { icon: HomeIcon, name: "Repositories" },
  { icon: CodeIcon, name: "AI Code Review" },
  { icon: CloudIcon, name: "Cloud Security" },
  { icon: HowToIcon, name: "How to Use" },
  { icon: SettingsIcon, name: "Settings" },
];

const BottomNavItems = [
  { icon: PhoneIcon, name: "Support" },
  { icon: SignOutIcon, name: "Logout" },
];

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-[1] border-r-2">
        <div className="flex flex-col items-center w-full gap-4">
          <Image
            src={LogoWithName}
            alt="Logo with name"
            width={300}
            height={300}
            className="w-[161.5px] h-[32px] mt-5"
          />
          <div>
            <p className="border border-gray-600 rounded-md p-2">
              UtkarshDhairyaPanwar
            </p>
          </div>
          <div className="flex flex-col h-screen justify-between">
            <div>
              {NavbarItems.map((item, index) => (
                <div
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
                    className="w-[20.24px] h-[17.97px]"
                  />
                  <p
                    className={`${
                      item.name === "Repositories" && "text-white"
                    }`}
                  >
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
            <div>
              {BottomNavItems.map((item, index) => (
                <div
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-[6] bg-[#FAFAFA] p-4">{children}</div>
    </div>
  );
};
export default RootLayout;