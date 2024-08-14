"use client";
import React, { useState } from "react";
import Button from "../design/Button";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const baseUrl = process.env.BASE_URL;

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(`${baseUrl}/api/comments?postSlug=${postSlug}`, fetcher);

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch(`${baseUrl}/api/comments`, {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
      headers: { "Content-Type": "application/json" },
    });
    mutate();
  };

  return (
    <div className="">
      <h2 className="title h3 mb-12 text-[var(--softTextColor)]">Comments</h2>
      {status === "authenticated" ? (
        <div className="">
          <textarea
            className="border border-grey-500 px-5 py-2 w-full rounded-md"
            placeholder="write a comment..."
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="flex justify-end">
            <Button primary className="mt-1" onClick={handleSubmit}>
              Post
            </Button>
          </div>
        </div>
      ) : (
        <Link href="/Login">Login to comment</Link>
      )}
      <div className="flex flex-col gap-[20px] items-left">
        {isLoading
          ? "Loading..."
          : data?.map((item) => (
              <div className="flex flex-col gap-[10px] w-full my-2 py-4 border-t" key={item._id}>
                <p className="text-[var(--softTextColor)] py-4">{item.desc}</p>
                <div className="flex flex-row gap-[10px] items-center">
                  <div className="h-[40px] w-[40px] relative rounded-full">
                    {item?.user?.image && (
                      <Image src={item.user.image} alt="placeholder" fill className="object-fit rounded-full" />
                    )}
                  </div>
                  <div className="flex h-full flex-row gap-[5px] text-[var(--softTextColor;)]">
                    <span className="font-semibold">{item.user.name}</span>
                    <span> | </span>
                    <span>{item.createdAt.substring(0, 10)}</span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
