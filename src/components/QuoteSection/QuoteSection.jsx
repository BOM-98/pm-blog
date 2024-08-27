import React from "react";
import Image from "next/image";
import Button from "../Design/Button";
import Typewriter from "../Design/Typewriter";

const QuoteSection = () => {
  return (
    <div className="mt-[90px] items-center w-full min-h-[320px] border-y-2 border-orange-500">
      <div className="my-[50px] flex gap-[50px] flex-col md:flex-row">
        <div className="flex-1 flex flex-col gap-[20px]">
          <h2 className="h3">
            <Typewriter
              text="The reasonable person adapts themself to the world: the unreasonable one persists in trying to adapt the world to themself. Therefore all progress depends on the unreasonable person."
              actions={[
                { type: "type", count: 51 },
                { type: "pause", duration: 1000 },
                { type: "type", count: 72 },
                { type: "pause", duration: 1000 },
                { type: "type", count: 58 },
                { type: "pause", duration: 1000 },
                { type: "delete", count: 23 },
              ]}
            />
            <span className="text-orange-500">
              <Typewriter
                text="builders."
                actions={[
                  { type: "pause", duration: 15500 },
                  { type: "type", count: 9 },
                ]}
              />{" "}
            </span>
            <span className="inline-block bg-transparent animate-blink text-orange-500">|</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default QuoteSection;
