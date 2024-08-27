import MenuPosts from "../MenuPosts/MenuPosts";
import MenuCategories from "../CategoryList/MenuCategories";

const Menu = () => {
  return (
    <div className="flex flex-1 sm:flex-[2] flex-col mt-12">
      <h2 className="h5 text-gray-500 text-base font-normal">{"what's hot"}</h2>
      <h3 className="text-[28px] mb-12 font-semibold">Most Popular</h3>
      <MenuPosts />
      <h2 className="h5 text-gray-500 text-base font-normal mt-12">{"Discover by topic"}</h2>
      <h3 className="text-[28px] mb-12 font-semibold">{"Categories"}</h3>
      <MenuCategories />
      <h2 className="h5 text-gray-500 text-base font-normal mt-12">{"chosen by the editor"}</h2>
      <h3 className="text-[28px] mb-12 font-semibold">{"Editor's Picks"}</h3>
      <MenuPosts withImage />
    </div>
  );
};

export default Menu;
