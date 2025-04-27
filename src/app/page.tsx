import Banner from "@/components/Banner/Banner"
import TitlesComponent from "@/components/TitlesComponent/TitlesComponent"
import TwoSections from "@/components/TwoSections/TwoSections"

export const metadata = {
    title: "Titulo de la Home"
}

export default function HomePage() {
    return (
        <>
            <Banner />
            <TwoSections />
            <TitlesComponent />
        </>
    )
}