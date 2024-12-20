import { SignInItems } from "@/constants/contants";
import Image from "next/image";
import Link from "next/link";
import SignInHeader from "@/components/SignInHeader";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-[672px] h-[602.34px] border rounded-xl bg-white flex flex-col items-center max-md:px-3 max-md:w-[408px]">
        <SignInHeader type="sass"/>
        <div className="flex flex-col gap-4 py-[24px] justify-center">
          {SignInItems.map((item, index) => (
            <Link key={index} href="/">
              <button
                className="flex gap-4 border-2 rounded-md w-[446px] h-[57.59px] justify-center items-center max-md:w-[376px] max-md:h-[57.59px]"
              >
                <Image
                  src={item.icon}
                  alt="logo"
                  width={300}
                  height={300}
                  className="w-[24px] h-[24px]"
                />
                <p className="text-[16px] font-semibold">{item.text}</p>
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-[16px] max-md:text-[14px]">
          By signing up you agree to the{" "}
          <span className="font-semibold hover:cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};
export default page;
