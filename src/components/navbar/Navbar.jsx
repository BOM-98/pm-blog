import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[100px]">
      <div className="gap-[10px] flex-[1] hidden sm:flex">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      <div className="flex-[2] text-start text-[22px] sm:text-center sm:text-[36px] font-bold">PM Mastery</div>
      <div className="flex-[1] flex gap-[20px] justify-end">
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
