import Comments from "@/components/Comments/Comments";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = await res.json();
  return result;
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  return (
    <div className="container">
      <div className="flex items-center gap-[50px] h-[400px] mt-12 mb-12">
        <div className="flex-1">
          <h1 className="h2 mt-12 mb-6">{data?.title}</h1>
          <div className="flex flex-row gap-[20px] items-center">
            {data.user?.image && (
              <div className="h-[50px] w-[50px] relative rounded-full">
                <Image src={data.user.image} alt="placeholder" fill className="object-fit rounded-full" />
              </div>
            )}
            <div className="flex flex-col gap-[5px] text-[var(--softTextColor;)] my-2">
              <span>11.02.2023</span>
              <span>{data?.user.name}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className="imagecontainer h-full w-[50%] relative rounded-lg">
            <Image src={data.img} alt="placeholder" fill className="object-cover rounded-xl" />
          </div>
        )}
      </div>
      <div className="content">
        <div className="post mt-12">
          <div className="post-content">
            <p className="body-1">{data.desc}</p>
            <div className="comments mt-12">
              <Comments postSlug={slug} />
            </div>
          </div>
        </div>

        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
