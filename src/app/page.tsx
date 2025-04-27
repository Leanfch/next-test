import Banner from "@/components/Banner/Banner"
import LearningComponent from "@/components/Learning/LearningComponent"
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
            <LearningComponent />
        </>
    )
}