import React from "react";
import Pagination from "../Paginations/Pagination";
import Card from "../Design/Card";

const baseUrl = process.env.BASE_URL;
const getData = async (page, cat) => {
  const res = await fetch(`${baseUrl}/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = await res.json();
  return result;
};

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat);
  const POST_PER_PAGE = 3;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="flex flex-col flex-[5] mt-12">
      <h2 className="title h2 mb-12">Recent Posts</h2>
      <div className="posts flex flex-wrap gap-4">
        {posts.map((post) => (
          <Card key={post._id} post={post} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
