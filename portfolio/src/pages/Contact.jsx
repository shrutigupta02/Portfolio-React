import Footer from "../components/Footer";
import Header from "../components/Header";
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';
import { aboutDetails } from "../utils/about";

export default function Contact() {
    return (
        <div className="m-5 p-3 h-screen">
            <h3 className="text-yellow-500 text-6xl mb-4 font-bold hover:italic">
                Reach out to me!
            </h3>
            <div className="mt-4 h-2/3 w-full flex justify-center items-center ">
                <div className="hover:shadow-yellow-800/80 w-1/4 shadow-lg m-4 rounded-lg p-2 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between" style={{ width: '300px' }}>
                    <MailIcon style={{ fontSize: 40 }} className="text-yellow-800 mb-4"/>
                    <h4 className="mb-2 text-yellow-800 text-2xl font-bold">Email</h4>
                    <a href="mailto:shrutiguptaindore02@gmail.com" className="text-yellow-600 text-lg font-medium italic hover:text-blue-800 hover:underline mt-auto">
                    shrutiguptaindore02@gmail.com
                    </a>
                </div>
                <div className="hover:shadow-yellow-800/80 w-1/4 shadow-lg m-4 rounded-lg p-2 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between" style={{ width: '300px' }}>
                    <LinkedInIcon style={{ fontSize: 40 }} className="text-yellow-800 mb-4"/>
                    <h4 className="mb-2 text-yellow-800 text-2xl font-bold">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/shrutigupta2/" className="text-yellow-600 text-lg font-medium italic hover:text-blue-800 hover:underline mt-auto">
                        Shruti Gupta
                    </a>
                </div>
                <div className="hover:shadow-yellow-800/80 w-1/4 shadow-lg m-4 rounded-lg p-4 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between" style={{ width: '300px' }}>
                    <GitHubIcon style={{ fontSize: 40 }} className="text-yellow-800 mb-4"/>
                    <h4 className="mb-2 text-yellow-800 text-2xl font-bold">GitHub</h4>
                    <a href="https://github.com/shrutigupta02" className="text-yellow-600 text-lg font-medium italic hover:text-blue-800 hover:underline mt-auto">
                        @shrutigupta02
                    </a>
                </div>
                <div className="hover:shadow-yellow-800/80 w-1/4  shadow-lg m-4 rounded-lg p-4 transform hover:scale-105 transition-transform duration-300 flex flex-col justify-between" style={{ width: '300px' }}>
                    <ArticleIcon style={{ fontSize: 40 }} className="text-yellow-800 mb-4"/>
                    <h4 className="mb-2 text-yellow-800 text-2xl font-bold">Resume</h4>
                    <a href={aboutDetails.resume} className="text-yellow-600 text-lg font-medium italic hover:text-blue-800 hover:underline mt-auto">
                        Link
                    </a>
                </div>
            </div>

        </div>

    );
}
