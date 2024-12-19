import Navbar from "@/components/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-[1] border-r-2">
        <Navbar />
      </div>
      <div className="flex flex-[6] bg-[#FAFAFA] p-4">{children}</div>
    </div>
  );
};
export default RootLayout;