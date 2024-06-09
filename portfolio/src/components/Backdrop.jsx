import logo from "../assets/portfolioLogo.png";

export default function Backdrop(){
    return(
        <div className="w-full h-screen flex items-center justify-center">
            <img 
            className="relative"
            src={logo}/>
            <h1 
            className="text-yellow-500 absolute bottom-20 text-6xl font-bold hover:italic">
                S H R U T I  G U P T A
            </h1>
        </div>
    )
}