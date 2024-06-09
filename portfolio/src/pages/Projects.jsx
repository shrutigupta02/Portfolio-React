import Footer from "../components/Footer";
import Header from "../components/Header";
import { projects } from "../utils/projects";

export default function Projects(){
    

    return(
        <div>
            <Header/>
            <div className="m-5 p-3 h-screen">
                <h3 className="text-yellow-500 text-6xl font-bold hover:italic">My Projects:</h3>
                <div className="mt-4">
                    <ul>
                        {projects.map((project)=>(
                            <li className="my-3">
                                <h4 className="mb-2 text-yellow-800 text-2xl font-bold hover:italic">{project.name}</h4>
                                <p className="mb-2 text-md">{project.description}</p>
                                <a href={project.link}
                                className="mb-2 text-inherit text-lg font-medium italic hover:text-inherit hover:underline">{project.link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}