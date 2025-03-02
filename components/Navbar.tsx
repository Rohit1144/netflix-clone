import { useCallback, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import AccountMenu from "./AccountMenu";
import useCurrentUser from "@/hooks/useCurrentUser";

const TOP_OFFSET = 66;

const Navbar = () => {
    const {data: user} = useCurrentUser()

    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showAccountMenu, setShowAccountMenu] = useState(false)
    const [showBackground, setShowBackground]  =useState(false)

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current)
    }, [])

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            }
            else
                setShowBackground(false)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav className="fixed w-full z-40">
            <div className={`flex flex-row items-center px-4 md:px-16 py-6 transition duration 500 ${showBackground?  `bg-zinc-900 bg-opacity-90`: ``}`}>
                <img className="h-8 lg:h-12" src="/images/logo.png" alt="logo" />
                <div className="flex-row hidden lg:flex ml-8 gap-7">
                    <NavbarItem label="Home"/>
                    <NavbarItem label="Series"/>
                    <NavbarItem label="Films"/>
                    <NavbarItem label="New & Popular"/>
                    <NavbarItem label="My List"/>
                    <NavbarItem label="Browse by Language"/>
                </div>
                <div onClick={toggleMobileMenu} className="flex flex-row lg:hidden ml-8 gap-2 cursor-pointer relative items-center">
                    <p className="text-white text-sm">Browse</p>
                    <BsChevronDown className={`transition text-white ${showMobileMenu? `rotate-180`: `rotate-0`}`}/>
                    <MobileMenu visible = {showMobileMenu}/>
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
                        <BsSearch/>
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
                        <BsBell/>
                    </div>
                    <div onClick={toggleAccountMenu} className="flex flex-row gap-2 relative items-center cursor-pointer">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/Netflix-avatar.png" alt="avatar" />
                        </div>
                        <BsChevronDown className={`transition text-white ${showAccountMenu? `rotate-180`: `rotate-0`}`}/>
                        <AccountMenu visible = {showAccountMenu} user={user}/>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;