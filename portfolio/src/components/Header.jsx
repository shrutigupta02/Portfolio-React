import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from '@mui/icons-material/Interests';

export default function Header() {
    const links = [
        { name: "Home", link: "home" },
        { name: "Projects", link: "projects" },
        { name: "About me", link: "about" },
        { name: "Contact", link: "contact" },
    ];

    // State for managing theme
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <div className="fixed top-0 left-0 right-0 z-10 p-4 mb-2 h-min w-full flex items-center justify-between">
            <div className="flex items-center">
                <Logo onClick={() => document.getElementById("home").scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer"/>
                <h1 className="ml-4 text-yellow-500 text-xl font-bold hover:italic">
                    SHRUTI GUPTA
                </h1>
            </div>
            <div className="flex items-center">
                <ul className="flex space-x-4">
                    <li
                    className="mr-4 text-yellow-500"
                    onClick={() => setDarkMode(!darkMode)}
                    >
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </li>
                    {links.map((link) => (
                        <li key={link.name} className="hover:underline cursor-pointer">
                            <Link to={link.link} smooth={true} duration={500}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    );
}
