import Image from "next/image";
import LogoBig from "../public/authPageIcons/LogoBig.png";
import InfoBig from "./InfoBig";
import InfoSmall from "./InfoSmall";

const SigninSide = () => {
  return (
    <div className="flex flex-1 justify-center items-center max-md:hidden">
      <Image
        src={LogoBig}
        width={300}
        height={300}
        alt="CodeAnt Logo"
        className="absolute h-[319px] w-[284px] left-0 bottom-0"
      />
      <div className="relative w-[474px] h-[322px]">
        <div className="absolute z-0">
          <InfoBig/>
        </div>
        <div className="absolute z-10 bottom-0 right-0">
          <InfoSmall/>
        </div>
      </div>
    </div>
  );
};
export default SigninSide;
