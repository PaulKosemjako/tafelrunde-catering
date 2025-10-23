import Link from "next/link";
import styles from "@/styles/header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoArea}>
                <img src="/images/Tafelrundelogo-removebg-preview.png" alt="Die Tafelrunde Logo" />
                <h1>Die Tafelrunde</h1>
            </div>

            <nav className={styles.nav}>
                <Link href="/">Startseite</Link>
                <Link href="/menus">Menüs</Link>
                <Link href="/kontakt">Kontakt</Link>
            </nav>
        </header>
    );
}