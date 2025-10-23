import { menus } from "@/data/menus";
import MenuCard from "@/components/MenuCard";
import styles from "@/styles/menus.module.scss";
import Layout from "@/components/Layout";

export default function MenusPage() {
    return (
        <Layout>
            <main className={styles.container}>
                <h1>Unsere Menüs & Büffets</h1>
                <div className={styles.grid}>
                    {menus.map((menu) => (
                        <MenuCard key={menu.id} menu={menu} />
                    ))}
                </div>
            </main>
        </Layout>
    )
}