import Banner from "@/components/Banner/Banner"
import CoursesWorks from "@/components/CoursesWorks/CoursesWorks"
import LearningComponent from "@/components/Learning/LearningComponent"
import PrideComponent from "@/components/PrideComponent/PrideComponent"
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
            <CoursesWorks />
            <PrideComponent />
        </>
    )
}