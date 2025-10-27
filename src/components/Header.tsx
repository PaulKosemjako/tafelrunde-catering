import Link from "next/link";
import styles from "@/styles/header.module.scss";
import { useCart } from "@/context/CartContext";
import {ShoppingCart} from "lucide-react";

export default function Header() {
    const {items} = useCart();
    const itemCount = items.reduce((sum, item) => sum + item.portions, 0);// Gesamtportionen oder Artikel
    
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
                <Link href="/cart" className={styles.cartLink}>
                    <ShoppingCart size={22} />
                    {itemCount > 0 && <span className={styles.cartCount}>{itemCount}</span>}
                </Link>
            </nav>
        </header>
    );
}