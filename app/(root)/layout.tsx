"use client"
import Navbar from "@/components/Navbar";
import NavbarSmall from "@/components/NavbarSmall";
import { useState } from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="flex h-screen max-md:flex-col">
      <div className="flex flex-[1] border-r-2 max-md:hidden">
        <Navbar />
      </div>
      <div className="md:hidden">
        <NavbarSmall setIsOpen={setIsOpen} />
      </div>
      <div className={`flex flex-[6] bg-[#FAFAFA] md:p-4 ${isOpen && "overflow-y-hidden"}`}>{children}</div>
    </div>
  );
};
export default RootLayout;
