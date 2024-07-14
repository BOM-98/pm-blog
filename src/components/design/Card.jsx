import Image from "next/image";
import Button from "../design/Button";

const Card = () => {
  return (
    <div className="mb-[50px] sm:flex flex-col sm:flex-row align-middle gap-[20px] sm:gap-[50px]">
      <div className="flex-1 flex h-[200px] md:h-[350px] relative">
        <Image src="/p1.jpeg" alt="" fill className="rounded-lg object-cover" />
      </div>
      <div className="flex flex-col flex-1 justify-center gap-[25px] text-container">
        <div className="details">
          <span className="text-[var(--softTextColor)]">11.02.2023 - </span>
          <span className="text-orange-500">Category</span>
        </div>
        <h3 className="h3">lorem Ipsom</h3>
        <p className="text-[16px] font-[300] text-[var(--softTextColor)]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat omnis ea vel ut maxime voluptatum,
          exercitationem voluptates delectus. Saepe consequuntur eum ea laborum sint recusandae repellat accusamus,
          possimus nobis. Quod.
        </p>
        <Button textOnly primary href="/" className="self-start">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default Card;
