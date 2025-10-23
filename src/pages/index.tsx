import Layout from "@/components/Layout";
import styles from "@/styles/home.module.scss";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout>
      <main className={styles.hero}>
        <h1>
          Wilkommen bei <span>Die Tafelrunde</span>
        </h1>
        <p>
          Exclusives Catering für jeden Anlass - entdecken Sie unsere Büffets
          voller Geschmack und Qualität.
        </p>
        <Link href="/menus" className={styles.ctaButton}>
          Menüs ansehen
        </Link>
      </main>
    </Layout>
  );
}