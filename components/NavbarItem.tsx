import React from "react";

interface NavbarProps {
    label: String
}


const NavbarItem: React.FC<NavbarProps> = ({label}) => {
    return (
        <div className="text-white cursor-pointer transition hover:text-gray-300">
            {label}
        </div>
    )
}

export default NavbarItem;