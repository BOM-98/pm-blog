import styles from "./homepage.module.css";
import Featured from "./components/featured/Featured";
import Menu from "./components/menu/Menu";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList></CardList>
        <Menu />
      </div>
    </div>
  );
}
