import { GetStaticPaths, GetStaticProps } from "next";
import { menus, Menu } from "@/data/menus";
import { useState } from "react";
import styles from "@/styles/menuDetail.module.scss";
import Layout from "@/components/Layout";

interface MenuDetailProps {
    menu: Menu;
}

export default function MenuDetailPage({menu}: MenuDetailProps) {
    const [portionCount, setPortionCount] = useState(10);
    const totalPrice = menu.pricePerPerson * portionCount;

    return (
        <Layout>
            <main className={styles.container}>
                <div className={styles.card}>
                    <img src={menu.image} alt={menu.title} />
                    <div className={styles.content}>
                        <h1>{menu.title}</h1>
                        <p className={styles.description}>{menu.description}</p>
                        <div className={styles.portions}>
                            <label htmlFor="portion">Portionen:</label>
                            <input
                                id="portionen"
                                type="number"
                                min="10"
                                value={portionCount}
                                onChange={(e) =>
                                    setPortionCount(parseInt(e.target.value) || 1)
                                }
                            />
                        </div>

                        <p className={styles.price}>
                            Gesamtpreis: <strong>{totalPrice.toFixed(2)} €</strong>
                        </p>

                        <button className={styles.button}
                        onClick={() => alert("Anfrageformular folgt später 😊")}>
                            Anfrage senden
                        </button>

                        <button className={styles.backButton}
                        onClick={() => history.back()}>
                            ⬅️Zurück zur Übersicht
                        </button>
                    </div>
                </div>
            </main>
        </Layout>
    );
}


// generate static paths
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = menus.map((menu) => ({
        params: {id: menu.id},
    }));

    return {
        paths,
        fallback: false, // no another sites menus
    };
};

// datas for path
export const getStaticProps: GetStaticProps = async({params}) => {
    const menu = menus.find((m) => m.id === params?.id);

    return {
        props: {
            menu: menu || null,
        },
    };
};