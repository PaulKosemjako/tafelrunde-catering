import { useState } from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/contact.module.scss";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        telefon:"",
        nachricht:"",
    });

    const [success, setSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // later POST to BE
        console.log("Gesendete DAten:", formData);
        setSuccess(true);
        setFormData({name:"", email:"", telefon:"", nachricht:""});
    };

    return (
        <Layout>
            <div className={styles.container}>
                <h1>Kontakt & Anfragen</h1>
                <p>
                    Haben Sie Fragen oder möchten ein individuelles Angebot?
                    Schreiben Sie uns - wir melden uns so schnell wie möglich.
                </p>

                {success && (
                    <p className={styles.success}>✅ Nachricht erfolgreich gesendet!</p>
                )}

                <form className={styles.form} onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange} />

                    <label htmlFor="nachricht">Nachricht</label>
                    <textarea
                    id="nachricht"
                    name="nachricht"
                    rows={5}
                    required
                    value={formData.nachricht}
                    onChange={handleChange} />
                </form>
            </div>
        </Layout>
    )
}