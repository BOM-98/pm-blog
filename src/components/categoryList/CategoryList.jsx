import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const categoryList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Categories</h2>
      <div className={styles.categories}>
        <div className={styles.category}>
          <Link href="/blog?cat=style">
            <Image src="/style.png" alt="" width={32} height={32} className={styles.Image} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default categoryList;
