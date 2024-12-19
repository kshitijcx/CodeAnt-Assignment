import SigninSide from "@/components/SigninSide";

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <SigninSide />
      <div className="flex flex-1 bg-[#FAFAFA] h-screen">{children}</div>
    </div>
  );
};
export default SignUpLayout;
