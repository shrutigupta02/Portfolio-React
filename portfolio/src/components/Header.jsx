import {useNavigate} from "react-router-dom";
import Logo from '@mui/icons-material/Interests';

export default function Header(){
    const links = [
        { name: "Home", link: "/" },
        { name: "Projects", link: "/projects" },
        { name: "About me", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];
    const navigate = useNavigate();

    let redirectToLink = (link)=>{
        navigate(link);
    }

    return(
        <div className="p-4 mb-2 h-min w-full flex items-center ">
                <div className="absolute ml-6 left-0">
                    <Logo onClick={()=>navigate("/")}/>
                </div>
                <div className="absolute right-0 mr-6">
                    <ul className="flex space-x-4 ml-4">
                        {links.map((link) => (
                            <li 
                            className="hover:underline cursor-pointer" onClick={()=>redirectToLink(link.link)}>{link.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
    )
}