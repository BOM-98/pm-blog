import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";
import Card from "@/components/design/Card";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className="container">
      <div className="relative">
        <div className="w-[50px] h-[50px] absolute top-10 left-10 rounded-full bg-blue-500 opacity-60 blur-lg" />
        <div className="w-[100px] h-[100px] absolute top-[20%] left-[50%] rounded-full bg-green-500 opacity-60 blur-lg" />
        <div className="w-[40px] h-[40px] absolute top-[40%] left-[80%] rounded-full bg-pink-500 opacity-60 blur-lg" />
        <div className="w-[180px] h-[180px] absolute top-[20%] left-[75%] rounded-full border-4 border-pink-500 blur-md" />
        <div className="py-20 bg-black/5 w-[100vw] rounded-[50px] border-2 border-white/20">
          <h1 className="title h1 text-left mx-12 my-6 px-10 text-orange-500 capitalize"> {cat} </h1>
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
