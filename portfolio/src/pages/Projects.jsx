import Footer from "../components/Footer";
import Header from "../components/Header";
import { projects } from "../utils/projects";
import Card from "../components/Card";

export default function Projects() {
    return (
            <div className="m-5 p-3 h-full w-full">
                <h3 className="text-yellow-500 flex-wrap text-6xl font-bold hover:italic">My Projects:</h3>
                <div className="mt-4 flex w-full">
                    {projects.map((project) => (
                        <Card key={project.id} item={project}/>
                    ))}
                </div>
            </div>
    );
}
