"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "../design/Button";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className="flex w-full flex-row justify-center md:justify-middle gap-10">
      {hasPrev && (
        <Button
          textOnly
          secondary
          className="hover:text-orange-600 text-[var(--softTextColor)]"
          onClick={() => router.push(`?page=${page - 1}`)}
        >
          Back
        </Button>
      )}
      {hasNext && (
        <Button primary disabled={!hasNext} onClick={() => router.push(`?page=${page + 1}`)}>
          Next
        </Button>
      )}
    </div>
  );
};

export default Pagination;
