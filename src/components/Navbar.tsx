import { useState } from 'react'
import Logo from "../assets/logo-text.png"

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const links = ["Home", "Technologies", "Projects", "About", "Contact"]

    return (
        <header className='sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200'>
            <nav className='max-w-7xl mx-auto px-4 h-16 flex items-center justify-between'>
                
                {/* Left side: Mobile menu toggle + Logo */}
                <div className='flex items-center gap-3'>
                    <button 
                        className='md:hidden text-gray-600 focus:outline-none'
                        onClick={() => setOpen(!open)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <a href="#" className='flex items-center'>
                        <img src={Logo} alt="Logo" className="h-8 w-auto object-contain" />
                    </a>
                </div>

                {/* links */}
                <ul className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-600'>
                    {links.map((link) => (
                        <li key={link}>
                            <a 
                                href={`#${link.toLowerCase()}`} 
                                className='hover:text-pink-600 transition'
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* right btn */}
                <div className='flex items-center gap-4'>
                    <button className='text-sm font-medium text-gray-700 hover:text-gray-900 transition cursor-pointer'>
                        Sign In                    
                    </button>
                    <button className='text-sm px-5 py-2 rounded-full bg-pink-600 text-white font-medium hover:bg-pink-700 transition cursor-pointer'>
                        Sign Up
                    </button>
                </div>
            </nav>

            {/* mobile menu */}
            {open && (
                <ul className='md:hidden bg-white border-t border-gray-200 px-4 py-3 space-y-2 text-gray-600 shadow-lg'>
                    {links.map((link) => (
                        <li key={link}>
                            <a 
                                href={`#${link.toLowerCase()}`} 
                                className='block py-2 text-base font-medium hover:text-pink-700'
                                onClick={() => setOpen(false)}
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </header>
    )
}

export default Navbar