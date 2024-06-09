import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Contact(){
    return(
        <div>
            <Header/>
            <div className="h-screen">
            <h3 className="text-yellow-500 text-6xl mb-4 font-bold hover:italic">
                Reach out to me!
            </h3>
            </div>
            <Footer/>
        </div>
    )
}