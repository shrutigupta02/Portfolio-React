import Header from "../components/Header";
import Backdrop from "../components/Backdrop";
import Footer from "../components/Footer";
import Projects from "./Projects";
import About from "./About.jsx";
import Contact from "./Contact";

export default function Home() {
    return (
        <div className="w-full overflow-x-hidden">
            <Header />
            <div id="home">
                <Backdrop />
            </div>
            <hr className="my-2"/>
            <div id="projects">
                <Projects />
            </div>
            <hr className="my-2"/>
            <div id="about">
                <About />
            </div>
            <hr className="my-2"/>
            <div id="contact">
                <Contact />
            </div>
            <Footer />
        </div>
    );
}
