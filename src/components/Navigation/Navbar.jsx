import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center justify-center h-[100px]">
      <Link href="/" className="text-start text-[22px] sm:text-[28px] font-bold inline">
        <Image src="/builder-paths-logo.svg" className="h-8 me-3 inline" alt="Main Logo" width={32} height={32} />
        Builder Paths
      </Link>
      <div className="flex gap-[20px] justify-end">
        <ThemeToggle />
        <Link href="/" className="flex-[1] gap-[20px] hidden sm:flex">
          Homepage
        </Link>
        <Link href="/" className="flex-[1] gap-[20px] hidden sm:flex">
          Contact
        </Link>
        <Link href="/" className="flex-[1] gap-[20px] hidden sm:flex">
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
