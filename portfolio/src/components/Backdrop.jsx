import logo from "../assets/portfolioLogo.png";

export default function Backdrop(){
    return(
        <div className="w-full h-screen flex items-center justify-center">
            <img 
            className="relative"
            src={logo}/>
            
        </div>
    )
}