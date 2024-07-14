import Image from "next/image";
import Link from "next/link";

const MenuPosts = ({ withImage }) => {
  return (
    <>
      <div className="flex flex-col w-full gap-[20px] justify-between">
        <Link href="/" className="flex flex-row gap-4 w-full items-center align-middle">
          {withImage && (
            <div className="relative aspect-square w-[75px] h-[75px]">
              <Image src="/p1.jpeg" alt="" className="object-cover border rounded-full fit-content" fill />
            </div>
          )}
          <div className="flex-1 flex flex-col">
            <span className="inline-block text-sm text-white bg-orange-500 py-[3px] px-[8px] rounded-full w-[max-content] text-center">
              Travel
            </span>
            <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
            <div className="flex flex-col">
              <span className="text-sm text-[var(--softTextColor)]">John Doe</span>
              <span className="text-sm text-[var(--softTextColor)]">11.02.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex flex-row gap-4 w-full items-center align-middle">
          {withImage && (
            <div className="relative aspect-square w-[75px] h-[75px]">
              <Image src="/p1.jpeg" alt="" className="object-cover border rounded-full fit-content" fill />
            </div>
          )}
          <div className="flex-1 flex flex-col">
            <span className="inline-block text-sm text-white bg-orange-500 py-[3px] px-[8px] rounded-full w-[max-content] text-center">
              Travel
            </span>
            <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
            <div className="flex flex-col">
              <span className="text-sm text-[var(--softTextColor)]">John Doe</span>
              <span className="text-sm text-[var(--softTextColor)]">11.02.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex flex-row gap-4 w-full items-center align-middle">
          {withImage && (
            <div className="relative aspect-square w-[75px] h-[75px]">
              <Image src="/p1.jpeg" alt="" className="object-cover border rounded-full fit-content" fill />
            </div>
          )}
          <div className="flex-1 flex flex-col">
            <span className="inline-block text-sm text-white bg-orange-500 py-[3px] px-[8px] rounded-full w-[max-content] text-center">
              Travel
            </span>
            <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
            <div className="flex flex-col">
              <span className="text-sm text-[var(--softTextColor)]">John Doe</span>
              <span className="text-sm text-[var(--softTextColor)]">11.02.2023</span>
            </div>
          </div>
        </Link>
        <Link href="/" className="flex flex-row gap-4 w-full items-center align-middle">
          {withImage && (
            <div className="relative aspect-square w-[75px] h-[75px]">
              <Image src="/p1.jpeg" alt="" className="object-cover border rounded-full fit-content" fill />
            </div>
          )}
          <div className="flex-1 flex flex-col">
            <span className="inline-block text-sm text-white bg-orange-500 py-[3px] px-[8px] rounded-full w-[max-content] text-center">
              Travel
            </span>
            <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
            <div className="flex flex-col">
              <span className="text-sm text-[var(--softTextColor)]">John Doe</span>
              <span className="text-sm text-[var(--softTextColor)]">11.02.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MenuPosts;
