import styles from "@/styles/footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© {new Date().getFullYear()}Die Tafelrunde RC - Futtern wie bei Omi</p>
        </footer>
    );
}