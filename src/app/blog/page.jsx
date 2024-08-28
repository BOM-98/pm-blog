import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className="container">
      <div className="relative">
        <div className={`py-20 w-[100vw] rounded-[20px] border-4 border-orange-500`}>
          <h1 className={`title h1 text-left mx-12 my-6 px-10 text-orange-500 capitalize`}> {cat} </h1>
        </div>
      </div>
      <div className="flex gap-[50px]">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
