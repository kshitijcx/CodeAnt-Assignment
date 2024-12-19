import Image from "next/image";
import Pie from "../public/authPageIcons/pie.png";
import Arrow from "../public/authPageIcons/small-right.png";

const InfoSmall = () => {
  return (
    <div className="relative w-[265px] h-[164px] rounded-[24px] bg-white border shadow-xl">
      <div className="absolute top-[15.21px] left-[31.83px] flex gap-20">
        <Image
          src={Pie}
          alt="PieChart"
          height={200}
          width={200}
          className="w-[56px] h-[56.77px]"
        />
        <div className="flex flex-col justify-center">
          <div className="flex gap-2 items-center">
            <Image
              src={Arrow}
              alt="Arrow Up"
              height={300}
              width={300}
              className="w-[12px] h-[13px]"
            />
            <p className="text-[14px] text-[#0049C6] font-bold">14%</p>
          </div>
          <p className="text-[12px]">This Week</p>
        </div>
      </div>
      <div className="absolute left-[31.83px] top-[88.19px]">
        <p className="text-[14px] font-bold">Issues Fixed</p>
        <p className="text-[32px] font-bold">500K+</p>
      </div>
    </div>
  );
};
export default InfoSmall;
