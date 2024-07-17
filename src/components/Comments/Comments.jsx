import React from "react";
import Button from "../design/Button";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className="">
      <h2 className="title h3 mb-12 text-[var(--softTextColor)]">Comments</h2>
      {status === "authenticated" ? (
        <div className="">
          <textarea
            className="border border-grey-500 px-5 py-2 w-full rounded-md"
            placeholder="write a comment..."
          ></textarea>
          <div className="flex justify-end">
            <Button secondary className="mt-1">
              Post
            </Button>
          </div>
        </div>
      ) : (
        <Link href="/Login">Login to comment</Link>
      )}
      <div className="flex flex-row gap-[20px] items-center">
        <div className="h-[50px] w-[50px] relative rounded-full">
          <Image src="/p1.jpeg" alt="placeholder" fill className="object-fit rounded-full" />
        </div>
        <div className="flex flex-row gap-[5px] text-[var(--softTextColor;)] my-2">
          <span>11.02.2023</span>
          <span> | </span>
          <span className="font-semibold">John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Comments;
