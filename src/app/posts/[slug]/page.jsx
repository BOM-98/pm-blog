import Comments from "@/components/Comments/Comments";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className="container">
      <div className="flex items-center gap-[50px] h-[400px] mt-12 mb-12">
        <div className="flex-1">
          <h1 className="h2 mt-12 mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit</h1>
          <div className="flex flex-row gap-[20px] items-center">
            <div className="h-[50px] w-[50px] relative rounded-full">
              <Image src="/p1.jpeg" alt="placeholder" fill className="object-fit rounded-full" />
            </div>
            <div className="flex flex-col gap-[5px] text-[var(--softTextColor;)] my-2">
              <span>11.02.2023</span>
              <span>John Doe</span>
            </div>
          </div>
        </div>
        <div className="imagecontainer h-full w-[50%] relative rounded-lg">
          <Image src="/p1.jpeg" alt="placeholder" fill className="object-cover rounded-xl" />
        </div>
      </div>
      <div className="content">
        <div className="post mt-12">
          <div className="post-content">
            <p className="body-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea ducimus deserunt quisquam ipsum doloribus
              necessitatibus veritatis dolorem et maiores eaque fugit, magnam officiis ipsa exercitationem, alias
              possimus quos sit?
            </p>
            <p className="body-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea ducimus deserunt quisquam ipsum doloribus
              necessitatibus veritatis dolorem et maiores eaque fugit, magnam officiis ipsa exercitationem, alias
              possimus quos sit?
            </p>
            <p className="body-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea ducimus deserunt quisquam ipsum doloribus
              necessitatibus veritatis dolorem et maiores eaque fugit, magnam officiis ipsa exercitationem, alias
              possimus quos sit?
            </p>
            <div className="comments mt-12">
              <Comments />
            </div>
          </div>
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
