import Banner from "@/components/Banner/Banner"
import TwoSections from "@/components/TwoSections/TwoSections"

export const metadata = {
    title: "Titulo de la Home"
}

export default function HomePage() {
    return (
        <>
            <Banner />
            <TwoSections />
        </>
    )
}