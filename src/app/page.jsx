import styles from "./homepage.module.css";
import Featured from "../components/Featured/Featured";
import Menu from "../components/Menu/Menu";
import CategoryList from "../components/CategoryList/CategoryList";
import CardList from "../components/CardList/CardList";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className="content">
        <CardList></CardList>
        <Menu />
      </div>
    </div>
  );
}
