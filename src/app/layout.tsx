import { ReactNode } from "react"
import { Montserrat } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
    title: "NextJs Prueba",
    description: "Descripción de prueba para la página de prueba :)",
    keywords: ["Prueba", "NextJs"]   
}

type Props = {
    children: ReactNode;
}

const montserrat = Montserrat({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "700", "800"],
})

const roboto = Roboto({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "700"],
})

export default function RootLayout({children}: Props) {
    return (
        <html lang="es" className={montserrat.className}>
            <body>
                <Header />
                <main className={roboto.className}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}