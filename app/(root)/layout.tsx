import Navbar from "@/components/Navbar";
import NavbarSmall from "@/components/NavbarSmall";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen max-md:flex-col">
      <div className="flex flex-[1] border-r-2 max-md:hidden">
        <Navbar />
      </div>
      <div className="md:hidden">
        <NavbarSmall />
      </div>
      <div className="flex flex-[6] bg-[#FAFAFA] md:p-4">{children}</div>
    </div>
  );
};
export default RootLayout;
