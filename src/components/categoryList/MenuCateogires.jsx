import Link from "next/link";
import Image from "next/image";

const MenuCategories = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 items-start">
        <Link
          href="/blog?cat=style"
          className="capitalize px-2 py-4 rounded-[10px] bg-orange-50 flex justify-center items-center"
        >
          <div className="relative w-[32px] h-[32px]">
            <Image src="/style.png" alt="" fill className="rounded-full" />
          </div>
          <span className="ml-2 text-black font-medium">Style</span>
        </Link>
        <Link
          href="/blog?cat=style"
          className="capitalize px-2 py-4 rounded-[10px] bg-blue-50 flex justify-center items-center"
        >
          <div className="relative w-[32px] h-[32px]">
            <Image src="/style.png" alt="" fill className="rounded-full" />
          </div>
          <span className="ml-2 text-black font-medium">Style</span>
        </Link>
        <Link
          href="/blog?cat=style"
          className="capitalize px-2 py-4 rounded-[10px] bg-red-50 flex justify-center items-center"
        >
          <div className="relative w-[32px] h-[32px]">
            <Image src="/style.png" alt="" fill className="rounded-full" />
          </div>
          <span className="ml-2 text-black font-medium">Style</span>
        </Link>
        <Link
          href="/blog?cat=style"
          className="capitalize px-2 py-4 rounded-[10px] bg-pink-50 flex justify-center items-center"
        >
          <div className="relative w-[32px] h-[32px]">
            <Image src="/style.png" alt="" fill className="rounded-full" />
          </div>
          <span className="ml-2 text-black font-medium">Style</span>
        </Link>
        <Link
          href="/blog?cat=style"
          className="capitalize px-2 py-4 rounded-[10px] bg-green-50 flex justify-center items-center"
        >
          <div className="relative w-[32px] h-[32px]">
            <Image src="/style.png" alt="" fill className="rounded-full" />
          </div>
          <span className="ml-2 text-black font-medium">Style</span>
        </Link>
      </div>
    </>
  );
};

export default MenuCategories;
