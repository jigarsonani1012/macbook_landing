import Hero from "./components/hero"
import NavBar from "./components/NavBar"
import ProductViewer from "./components/Productviewer"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <ProductViewer />
        </main>
    )
}

export default App