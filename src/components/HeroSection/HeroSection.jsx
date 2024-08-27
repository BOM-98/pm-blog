import React from "react";
import Image from "next/image";
import Button from "../Design/Button";

const HeroSection = () => {
  return (
    <div className="mt-[30px] items-center w-full">
      <h1 className="text-[36px] md:text-[72px] sm:text-[64px] font-medium">Product Management Blog.</h1>
      <div className="mt-[60px] flex gap-[50px] flex-col md:flex-row">
        <div className="flex-1 h-[500px] w-auto relative">
          <div className="relative h-full w-full min-h-[300px] block">
            <Image
              src="/p1.jpeg"
              alt="featured image"
              className="object-cover min-w-[225px] rounded-xl relative flex-1"
              fill
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-[20px]">
          <h2 className="h2">Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h2>
          <p className="text-[20px] font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, quam nisi magni ea laborum inventore
            voluptatum laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit culpa
            debitis.
          </p>
          <Button primary href="/" className="self-start rounded-[10px]">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
