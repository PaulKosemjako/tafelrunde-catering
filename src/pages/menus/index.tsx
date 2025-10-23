import { menus } from "@/data/menus";
import MenuCard from "@/components/MenuCard";
import styles from "@/styles/menus.module.scss";

export default function MenusPage() {
    return (
        <main className={styles.container}>
            <h1>Unsere Menüs & Büffets</h1>
            <div className={styles.grid}>
                {menus.map((menu) => (
                    <MenuCard key={menu.id} menu={menu} />
                ))}
            </div>
        </main>
    )
}