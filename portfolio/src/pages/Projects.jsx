import Footer from "../components/Footer";
import Header from "../components/Header";
import { projects } from "../utils/projects";

export default function Projects() {
    return (
        <div>
            <Header />
            <div className="m-5 p-3 h-full">
                <h3 className="text-yellow-500 text-6xl font-bold hover:italic">My Projects:</h3>
                <div className="mt-4 flex">
                    {projects.map((project) => (
                        <div key={project.name} className="w-96 m-4 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
                            <h4 className="mb-2 text-yellow-800 text-2xl font-bold hover:italic">{project.name}</h4>
                            <p className="mb-2 text-md">{project.description}</p>
                            <a href={project.link} className="text-yellow-600 text-sm font-medium italic hover:text-blue-800 hover:underline">
                                {project.link}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
