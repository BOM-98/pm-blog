import React from "react";
import Image from "next/image";
import Link from "next/link";

const categoryList = () => {
  return (
    <div className="mx-auto mt-12">
      <h2 className="h2 mb-12">Categories</h2>
      <div className="flex flex-wrap justify-between gap-5">
        <Link
          href="/blog?cat=style"
          className="capitalize w-[100%] md:w-[45%] lg:w-[17.5%] h-[80px] rounded-[10px] bg-orange-50 flex justify-center items-center"
        >
          <div className="relative w-[32px] h-[32px]">
            <Image src="/style.png" alt="" fill className="rounded-full" />
          </div>
          <span className="ml-2 text-black">Style</span>
        </Link>
        <Link
          href="/blog?cat=style"
          className="capitalize w-[100%] md:w-[45%] lg:w-[17.5%] h-[80px] rounded-[10px] bg-blue-50 flex justify-center items-center"
        >
          <div className="relative w-[32px] h-[32px]">
            <Image src="/style.png" alt="" fill className="rounded-full" />
          </div>
          <span className="ml-2 text-black">Style</span>
        </Link>
        <Link
          href="/blog?cat=style"
          className="capitalize w-[100%] md:w-[45%] lg:w-[17.5%] h-[80px] rounded-[10px] bg-red-50 flex justify-center items-center"
        >
          <div className="relative w-[32px] h-[32px]">
            <Image src="/style.png" alt="" fill className="rounded-full" />
          </div>
          <span className="ml-2 text-black">Style</span>
        </Link>
        <Link
          href="/blog?cat=style"
          className="capitalize w-[100%] md:w-[45%] lg:w-[17.5%] h-[80px] rounded-[10px] bg-pink-50 flex justify-center items-center"
        >
          <div className="relative w-[32px] h-[32px]">
            <Image src="/style.png" alt="" fill className="rounded-full" />
          </div>
          <span className="ml-2 text-black">Style</span>
        </Link>
        <Link
          href="/blog?cat=style"
          className="capitalize w-[100%] md:w-[45%] lg:w-[17.5%] h-[80px] rounded-[10px] bg-green-50 flex justify-center items-center"
        >
          <div className="relative w-[32px] h-[32px]">
            <Image src="/style.png" alt="" fill className="rounded-full" />
          </div>
          <span className="ml-2 text-black">Style</span>
        </Link>
      </div>
    </div>
  );
};

export default categoryList;
