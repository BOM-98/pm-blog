import React from "react";
import Image from "next/image";
import Link from "next/link";

const getBaseUrl = () => {
  return process.env.BASE_URL || "https://www.builderpaths.com/";
};

const getData = async () => {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className="mx-auto mt-12">
      <h2 className="h2 mb-12">Categories</h2>
      <div className="flex flex-wrap justify-between gap-5">
        {data?.map((item) => (
          <Link
            href={`/blog?cat=${item.slug}`}
            key={item.id}
            className={`capitalize w-[100%] md:w-[45%] lg:w-[17.5%] min-w-[150px] md:min-w-[200px] lg:min-w-[250px] h-[80px] rounded-[10px] bg-${item.color}-50 flex justify-start items-center px-4 gap-1 hover:bg-${item.color}-200 hover:scale-105 transition`}
          >
            {item.img && (
              <div className="relative w-[32px] h-[32px]">
                <Image src={item.img} alt="" fill className="rounded-full" />
              </div>
            )}
            <span className={`ml-2 text-${item.color}-700 font-medium`}>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
