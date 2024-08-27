import styles from "./homepage.module.css";
import HeroSection from "@/components/HeroSection/HeroSection";
import Menu from "../components/Menu/Menu";
import CategoryList from "../components/CategoryList/CategoryList";
import CardList from "../components/CardList/CardList";
import QuoteSection from "@/components/QuoteSection/QuoteSection";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <HeroSection />
      <QuoteSection />
      <CategoryList />
      <div className="content">
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
