import { aboutDetails } from "../utils/about"
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About(){
    return(
        <div>
            <Header/>
            <div className="h-screen my-4">
            <h3 className="text-yellow-500 text-6xl mb-4 font-bold hover:italic">
                Hi! I'm {aboutDetails.name}
                </h3>
            <p className="mb-2 text-lg" style={{ whiteSpace: 'pre-line' }}>{(aboutDetails.description)}</p>
            <h6 className="text-yellow-800 text-lg mb-4 font-bold">Resume: 
            <a className="text-inherit pl-2 font-semibold hover:underline hover:italic hover:text-inherit"
            href={aboutDetails.resume}>{aboutDetails.name}</a></h6>
            </div>
            
            <Footer/>
        </div>
    )
}