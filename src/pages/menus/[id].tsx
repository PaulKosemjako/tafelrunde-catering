import type { GetStaticPaths, GetStaticProps } from "next";
import { menus, Menu } from "@/data/menus";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/MenuDetail.module.scss";
import { useCart } from "@/context/CartContext";

interface MenuDetailProps {
  menu: Menu;
}

export default function MenuDetailPage({ menu }: MenuDetailProps) {
  const {addToCart} = useCart();
  const [isHydrated, setIsHydrated] = useState(false);
  const [menuPortions, setMenuPortions] = useState<number>(10);
  const [extraPortions, setExtraPortions] = useState<Record<string, number>>(
    Object.fromEntries(menu.dishes.map((d) => [d.id, 0]))
  );
  const [priceChanged, setPriceChanged] = useState(false);

  // 🧩 Sicherstellen, dass Effekte erst nach Hydration laufen
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // --- Reagiere auf Preisänderung (nur nach Hydration)
  useEffect(() => {
    if (!isHydrated) return;
    setPriceChanged(true);
    const timeout = setTimeout(() => setPriceChanged(false), 400);
    return () => clearTimeout(timeout);
  }, [menuPortions, extraPortions, isHydrated]);

  // --- Dynamische Preisberechnung ---
  const baseTotal = menu.basePricePerPerson * menuPortions;
  const extrasTotal = menu.dishes.reduce(
    (sum, d) => sum + (extraPortions[d.id] || 0) * d.extraPricePerPortion,
    0
  );
  const totalPrice = baseTotal + extrasTotal;

  // --- Eingabe-Handler für Extras ---
  const handleExtraChange = (dishId: string, value: number) => {
    const newValue = Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;
    setExtraPortions((prev) =>
      prev[dishId] === newValue ? prev : { ...prev, [dishId]: newValue }
    );
  };

  return (
    <Layout>
      <main className={styles.container}>
        <div className={styles.card}>
          <img src={menu.image} alt={menu.title} className={styles.heroImage} />

          <div className={styles.content}>
            <h1>{menu.title}</h1>
            <p className={styles.description}>{menu.description}</p>

            <div className={styles.section}>
              <label htmlFor="portions">Anzahl Personen:</label>
              <input
                id="portions"
                type="number"
                min={10}
                step={1}
                value={menuPortions}
                onChange={(e) => {
                  const n = e.currentTarget.valueAsNumber;
                  setMenuPortions(Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0);
                }}
              />
            </div>

            <p className={styles.basePrice}>
              Basispreis: {menu.basePricePerPerson.toFixed(2)} € / Person
            </p>

            <hr className={styles.divider} />
            <h2>Zusätzliche Komponenten</h2>

            <div className={styles.dishList}>
              {menu.dishes.map((dish) => (
                <div key={dish.id} className={styles.dishItem}>
                  <div className={styles.dishImageWrapper}>
                    <img src={dish.image} alt={dish.name} className={styles.dishImage} />
                  </div>

                  <div className={styles.dishInfo}>
                    <span className={styles.dishName}>{dish.name}</span>
                    <span className={styles.dishPrice}>
                      {dish.extraPricePerPortion.toFixed(2)} € / Extra-Portion
                    </span>
                  </div>

                  <input
                    type="number"
                    min={0}
                    step={1}
                    value={extraPortions[dish.id] ?? 0}
                    onChange={(e) =>
                      handleExtraChange(dish.id, e.currentTarget.valueAsNumber)
                    }
                    className={styles.dishInput}
                  />
                </div>
              ))}
            </div>

            <hr className={styles.divider} />
            {/* 🔑 Der Key sorgt dafür, dass React den Preis neu rendert, auch wenn Google Translate aktiv ist */}
            <p
              key={totalPrice}
              className={`${styles.total} ${priceChanged ? styles.priceFlash : ""}`}
            >
              💶 Gesamtpreis: <strong>{totalPrice.toFixed(2)} €</strong>
            </p>

            <button
              className={styles.button}
                onClick={() => {
                  const extrasList = menu.dishes
                    .filter((d) => (extraPortions[d.id] ?? 0) > 0)
                    .map((d) => ({
                      name: d.name,
                      quantity: extraPortions[d.id],
                      price: d.extraPricePerPortion,
                    }));

                  addToCart({
                    id: menu.id,
                    title: menu.title,
                    portions: menuPortions,
                    extras: extrasList,
                    totalPrice,
                    image: menu.image,
                  });

                  const extrasText = 
                    extrasList.length > 0
                      ? extrasList.map((ex) => `${ex.name} * ${ex.quantity} = ${(ex.price * ex.quantity).toFixed(2)} €` 
                        ).join("\n")
                      : "Keine Extras ausgewählt";
                  
                  alert(`"${menu.title}" wurde zum Warenkorb hinzugefügt!\n\n` +
                    `Personen: ${menuPortions}\n\n` +
                    `Extras: \n${extrasText}\n\n` +
                    `Gesamtpreis: ${totalPrice.toFixed(2)} €`
                  );
              }}>
                🛒 In den Warenkorb
            </button>

            <button className={styles.backButton} onClick={() => history.back()}>
              ← Zurück zur Übersicht
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: menus.map((menu) => ({ params: { id: menu.id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const menu = menus.find((m) => m.id === params?.id);
  return { props: { menu } };
};
