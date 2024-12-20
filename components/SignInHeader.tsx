import LogoWithName from "@/public/authPageIcons/LogoWithName.png";
import Image from "next/image";
import Link from "next/link";

const SignInHeader = ({type}:{type:string}) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-[32px] pt-[36px]">
        <Image
          src={LogoWithName}
          alt="Logo with name"
          height={300}
          width={300}
          className="w-[201.38px] h-[40px]"
        />
        <p className="font-semibold text-[32px] max-md:text-[24px]">
          Welcome to CodeAnt AI
        </p>
      </div>
      <div className="mt-[16px] pb-[36px] border-b-2 w-full flex justify-center">
        <Link href="/signin-sass">
          <button className={`${type==="sass" ? "bg-[#1570EF] text-white" : "bg-[#FAFAFA]"}  text-[20px] font-medium w-[311px] max-md:w-[187px] h-[60px] max-md:h-[52px] border rounded-md`}>
            SASS
          </button>
        </Link>
        <Link href="/signin-self">
          <button className={`${type==="self" ? "bg-[#1570EF] text-white" : "bg-[#FAFAFA]"} text-[20px] font-medium w-[311px] max-md:w-[187px] h-[60px] max-md:h-[52px] border rounded-md`}>
            Self Hosted
          </button>
        </Link>
      </div>
    </div>
  );
};
export default SignInHeader;
