import { useCart } from "@/context/CartContext";
import Layout from "@/components/Layout";
import styles from "@/styles/cartPage.module.scss";

export default function CartPage() {
    const {items, removeFromCart, clearCart, totalAmount} = useCart();

    return (
        <Layout>
            <main className={styles.container}>
                <h1>🛒 Ihr Warenkorb</h1>

                {items.length === 0 ? (
                    <p className={styles.empty}>Ihr Warenkorb ist derzeit leer.</p>
                ) : (
                    <>
                        <div className={styles.cartItems}>
                            {items.map((item) => (
                                <div key={item.id} className={styles.cartItem}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={styles.image}
                                    />

                                    <div className={styles.info}>
                                        <h2>{item.title}</h2>
                                        <p>{item.portions} Portionen</p>

                                        {item.extras.length > 0 && (
                                            <ul className={styles.extras}>
                                                {item.extras.map((extra, i) => (
                                                    <li key={i}>
                                                        {extra.name} x {extra.quantity} (
                                                            {(extra.price * extra.quantity).toFixed(2)} €)
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <p className={styles.price}>
                                            <strong>{item.totalPrice.toFixed(2)} €</strong>
                                        </p>
                                        <button
                                            className={styles.removeBtn}
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Entfernen
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <hr className={styles.divider} />

                        <div className={styles.summary}>
                            <h3>Gesamtsumme:</h3>
                            <p className={styles.total}>{totalAmount.toFixed(2)} €</p>
                        </div>

                        <div className={styles.actions}>
                            <button className={styles.clearBtn} onClick={clearCart}>
                                Warenkorb leeren
                            </button>
                            <button className={styles.checkoutBtn}>Zur Kasse</button>
                        </div>
                    </>
                )}
            </main>
        </Layout>
    );
}