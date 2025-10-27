import Layout from "@/components/Layout";
import { CartProvider } from "@/context/CartContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <CartProvider>
      <Component {...pageProps} />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2500,
          style:{
            background: "#333",
            color: "#fff",
            borderRadius: "8px",
          },
        }} />
  </CartProvider>
  );
}
