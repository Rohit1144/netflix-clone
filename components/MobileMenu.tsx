import React from "react";

interface MobileProps {
    visible?: boolean
}


const MobileMenu: React.FC<MobileProps> = ({visible}) => {
    if(!visible)
        return null
    
    
    
    return (
        <div className="w-56 flex flex-col bg-black absolute top-8 left-0 py-5 border-2 border-gray-800">
            <div className="flex flex-col gap-4">
                
                <div className="text-white text-center px-3 hover:underline">
                    Home
                </div>
                <div className="text-white text-center px-3 hover:underline">
                    Series
                </div>
                <div className="text-white text-center px-3 hover:underline">
                    Films
                </div>
                <div className="text-white text-center px-3 hover:underline">
                    New & Popular
                </div>
                <div className="text-white text-center px-3 hover:underline">
                    My List
                </div>
                <div className="text-white text-center px-3 hover:underline">
                Browse by Languages
                </div>
            </div>
        </div> 
    )
}

export default MobileMenu;