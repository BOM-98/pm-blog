import React from "react";
import Pagination from "../Pagination/Pagination";
import Image from "next/image";
import Card from "../design/Card";

const CardList = () => {
  return (
    <div className="flex flex-col flex-[5] mt-12">
      <h2 className="title h2 mb-12">Recent Posts</h2>
      <div className="posts flex">
        <div className="post">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
