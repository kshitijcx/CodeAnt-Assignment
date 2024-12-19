import Image from "next/image";
import Logo from "../public/authPageIcons/logo.png";

const InfoBig = () => {
  return (
    <div className="w-[447px] h-[170px] rounded-[24px] relative bg-white border shadow-xl">
      <div className="flex gap-[8px] items-center absolute top-[21px] left-[22px]">
        <Image
          src={Logo}
          width={200}
          height={200}
          alt="CodeAnt Logo"
          className="h-[31px] w-[28px] left-0 bottom-0"
        />
        <p className="text-[18px] leading-[27px] font-bold">
          AI to Detect & Autofix Bad Code
        </p>
      </div>
      <span className="absolute w-[447px] top-[72px] border-b-2" />
      <div className="flex absolute top-[94.5px] left-[20px] gap-12">
        <div>
          <p className="text-[18px] leading-[27px] font-bold text-center">
            30+
          </p>
          <p className="text-[14px] leading-[20px]">Language Support</p>
        </div>
        <div>
          <p className="text-[18px] leading-[27px] font-bold text-center">
            10K+
          </p>
          <p className="text-[14px] leading-[20px]">Developers</p>
        </div>
        <div>
          <p className="text-[18px] leading-[27px] font-bold text-center">
            100K+
          </p>
          <p className="text-[14px] leading-[20px]">Hours Saved</p>
        </div>
      </div>
    </div>
  );
};
export default InfoBig;
