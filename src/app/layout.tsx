import Link from "next/link"

export const metadata = {
    title: "NextJs Prueba",
    description: "Descripción de prueba para la página de prueba :)",
    keywords: ["Prueba", "NextJs"]
}

export default function RootLayout({children}) {
    return (
        <html>
            <body>
                <header>
                    <nav>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                        </ul>
                    </nav>
                </header>
                {children}
                <footer>
                    <p>Todos los derechos reservados &copy; - 2025 </p>
                </footer>
            </body>
        </html>
    )
}