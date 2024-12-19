import LogoWithName from "@/public/authPageIcons/LogoWithName.png";
import Image from "next/image";
import GitlabIcon from "@/public/authPageIcons/gitlab.png";
import KeyIcon from '@/public/authPageIcons/key.png'

const NavbarItems = [
  { icon: GitlabIcon, text: "Self Hosted GitLab" },
  { icon: KeyIcon, text: "Sign in with SSO" },
];

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-[672px] h-[602.34px] border rounded-xl bg-white flex flex-col items-center">
        <div className="flex flex-col items-center gap-[32px] pt-[36px]">
          <Image
            src={LogoWithName}
            alt="Logo with name"
            height={300}
            width={300}
            className="w-[201.38px] h-[40px]"
          />
          <p className="font-semibold text-[32px]">Welcome to CodeAnt AI</p>
        </div>
        <div className="mt-[16px] pb-[36px] border-b-2 w-full flex justify-center">
          <button className="bg-[#FAFAFA] text-[20px] font-medium w-[311px] h-[60px] border rounded-md">
            SASS
          </button>
          <button className="bg-[#1570EF] text-white text-[20px] font-medium w-[311px] h-[60px] border rounded-md">
            Self Hosted
          </button>
        </div>
        <div className="flex flex-col gap-4 py-[24px] justify-center">
          {NavbarItems.map((item, index) => (
            <div key={index} className="flex gap-4 border-2 rounded-md w-[446px] h-[57.59px] justify-center items-center">
              <Image
                src={item.icon}
                alt="logo"
                width={300}
                height={300}
                className="w-[24px] h-[24px]"
              />
              <p className="text-[16px] font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4">
          <p className="text-[16px]">By signing up you agree to the <span className="font-semibold">Privacy Policy</span>.</p>
        </div>
    </div>
  );
};
export default page;
