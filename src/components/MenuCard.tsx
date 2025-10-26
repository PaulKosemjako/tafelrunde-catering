import { Menu } from "@/data/menus";
import styles from "@/styles/menuCard.module.scss"
import Link from "next/link";


interface Props {
    menu: Menu;
}

export default function MenuCard({menu}: Props) {
    return (
        <div className={styles.card}>
            <img src={menu.image} alt={menu.title} />
            <div className={styles.content}>
                <h2>{menu.title}</h2>
                <p>{menu.description}</p>
                <p className={styles.price}>
                    {menu.basePricePerPerson.toFixed(2)} € / Person
                </p>
                <Link href={`/menus/${menu.id}`}>Details ansehen</Link>
            </div>
        </div>
    )
}