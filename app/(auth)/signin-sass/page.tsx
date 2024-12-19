import LogoWithName from "@/public/authPageIcons/LogoWithName.png";
import Image from "next/image";
import GithubIcon from "@/public/authPageIcons/github.png";
import BitBucketIcon from "@/public/authPageIcons/bitbucket.png";
import AzureIcon from "@/public/authPageIcons/azure.png";
import GitlabIcon from "@/public/authPageIcons/gitlab.png";
import Link from "next/link";

const NavbarItems = [
  { icon: GithubIcon, text: "Sign in with Github" },
  { icon: BitBucketIcon, text: "Sign in with BitBucket" },
  { icon: AzureIcon, text: "Sign in with Azure Devops" },
  { icon: GitlabIcon, text: "Sign in with GitLab" },
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
          <Link href="/signin-sass">
            <button className="bg-[#1570EF] text-white text-[20px] font-medium w-[311px] h-[60px] border rounded-md">
              SASS
            </button>
          </Link>
          <Link href="/signin-self">
            <button className="bg-[#FAFAFA] text-[20px] font-medium w-[311px] h-[60px] border rounded-md">
              Self Hosted
            </button>
          </Link>
        </div>
        <div className="flex flex-col gap-4 py-[24px] justify-center">
          {NavbarItems.map((item, index) => (
            <Link key={index} href="/">
              <button
                className="flex gap-4 border-2 rounded-md w-[446px] h-[57.59px] justify-center items-center"
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
        <p className="text-[16px]">
          By signing up you agree to the{" "}
          <span className="font-semibold hover:cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};
export default page;
