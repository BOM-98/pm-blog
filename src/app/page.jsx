import styles from "./homepage.module.css";
import Featured from "../components/Featured/Featured";
import Menu from "../components/Menu/Menu";
import CategoryList from "../components/categoryList/CategoryList";
import CardList from "../components/CardList/CardList";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className="content">
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
