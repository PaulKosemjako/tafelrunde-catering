import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "@/styles/layout.module.scss";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout ({children}: LayoutProps) {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    );
}