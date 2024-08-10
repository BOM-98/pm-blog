import Image from "next/image";
import Button from "../design/Button";
import Link from "next/link";

const Card = ({ key, post }) => {
  const categoryColor = post.cat?.color || "orange";

  return (
    <div
      className="mb-[50px] sm:flex flex-col sm:flex-row align-middle gap-[20px] sm:gap-[50px] w-full group md:pr-5"
      key={key}
    >
      <div className="flex-1 flex h-[200px] mb-10 md:mb-0 md:h-full relative">
        {post.img && (
          <Link href={`/posts/${post.slug}`}>
            <Image
              src={post.img}
              alt=""
              fill
              className="rounded-lg object-cover group-hover:scale-105 group-hover:drop-shadow-md transition"
            />
          </Link>
        )}
      </div>
      <div className="flex flex-col flex-1 justify-center gap-[25px] text-container">
        <div className="details gap-2 lg:gap-5 flex flex-wrap align-middle items-center">
          <span className="text-[var(--softTextColor)]">{post.createdAt.substring(0, 10)}</span>
          <Link
            className={`px-4 py-2 hover:bg-${categoryColor}-50 text-center border border-${categoryColor}-500 rounded-full transition`}
            href={`/blog?cat=${post.catSlug}`}
          >
            <span className={`text-${categoryColor}-500`}>{post.catSlug}</span>
          </Link>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h3 className="h3 group-hover:text-orange-500 group-hover:scale-[1.01] transition">{post.title}</h3>
        </Link>
        <p className="text-[16px] font-[300] text-[var(--softTextColor)]">{post.desc.substring(0, 180)}...</p>
        <p className="text-[16px] font-[300] text-[var(--softTextColor)]">views: {post.views}</p>
        <Button textOnly primary href={`/posts/${post.slug}`} className="self-start">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default Card;
