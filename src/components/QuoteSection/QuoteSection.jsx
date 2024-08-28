import React from "react";
import Image from "next/image";
import Button from "../Designs/Button";
import Typewriter from "../Designs/Typewriter";

const QuoteSection = () => {
  return (
    <div className="mt-[90px] items-center w-full min-h-[550px] md:min-h-[320px] border-y-2 border-orange-500 static">
      <svg
        height="140"
        viewBox="0 0 32 32"
        width="140"
        xmlns="http://www.w3.org/2000/svg"
        id="fi_5355754"
        className="absolute fill-orange-500 opacity-30"
      >
        <g id="Layer_56">
          <path d="m15 16v7c0 1.6543-1.3457 3-3 3h-6.9502c-.3398 0-.6572-.1729-.8408-.459-1.334-2.0732-2.209-3.6484-2.209-6.541 0-1.8809.3633-3.6943 1.0791-5.3887 2.2422-5.3945 5.4043-7.6015 10.9092-7.6113h.002c.4766 0 .8867.3359.9805.8027.0938.4678-.1553.9365-.5957 1.1201-2.6388 1.0997-3.4317 2.3877-4.3605 5.0772h1.9854c1.6543 0 3 1.3457 3 3zm12-3h-1.9854c.9287-2.6895 1.7217-3.9775 4.3604-5.0771.4404-.1836.6895-.6523.5957-1.1201-.0937-.4669-.5039-.8028-.9805-.8028-.001 0-.001 0-.002 0-5.5049.0098-8.667 2.2168-10.9092 7.6113-.7157 1.6944-1.079 3.5078-1.079 5.3887 0 2.8926.875 4.4678 2.209 6.541.1836.2861.501.459.8408.459h6.9502c1.6543 0 3-1.3457 3-3v-7c0-1.6543-1.3457-3-3-3z"></path>
        </g>
      </svg>
      <div className="my-[50px] flex gap-[50px] flex-col md:flex-row">
        <div className="flex-1 flex flex-col gap-[20px]">
          <h2 className="text-[1.75rem] font-medium leading-normal md:text-[2.5rem]">
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
