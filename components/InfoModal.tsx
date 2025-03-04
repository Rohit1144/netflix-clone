import useInfoModal from "@/hooks/useInfoModal"
import useMovie from "@/hooks/useMovie"
import { useCallback, useEffect, useState } from "react"

import { IoCloseOutline } from "react-icons/io5";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";
import { LuDot } from "react-icons/lu";

const InfoModal  = ({visible, onClose}: {visible: boolean, onClose: any}) => {

    const [isVisible, setIsVisible] = useState(!!visible)
    const {movieId} = useInfoModal()
    const {data} = useMovie(movieId)

    useEffect(() => {
        setIsVisible(!!visible)
    }, [visible])

    const handlClose = useCallback(() => {
        setIsVisible(false)
        setTimeout(() => {
            onClose()
        }, 300)
    }, [onClose])

    if(!visible) return null

    return (
        <div className="
            z-50
            bg-black
            bg-opacity-80
            flex
            items-center
            justify-center
            inset-0
            fixed
            transition
            duration-300
            overflow-x-hidden
            overflow-y-auto
        ">
            <div className="
            relative 
            max-w-3xl 
            rounded-md 
            mx-auto 
            w-auto
            overflow-hidden
            ">
                
                <div className={`
                ${isVisible? "scale-100": "scale-0"}
                relative
                bg-zinc-900
                transform
                duration-300
                drop-sahadow-md
                flex-auto
                `}>
                    <div className="
                    relative
                    h-96
                    ">
                        <video className="
                        brightness-[60%]
                        object-cover
                        h-full
                        w-full
                        
                        " src={data?.videoUrl} 
                        poster={data?.thumbnailUrl}
                        autoPlay
                        muted
                        loop
                        ></video>

                        <div onClick={handlClose}
                        className="
                        cursor-pointer
                        absolute
                        top-3 right-3
                        rounded-full
                        bg-black
                        bg-opacity-80
                        w-10
                        h-10
                        flex
                        items-center
                        justify-center
                        "
                        >
                            <IoCloseOutline className="text-white" size={20}/>
                            
                        </div>
                        
                        <div className="
                            absolute
                            bottom-[10%]
                            left-10
                            ">
                                <p className="text-white 
                                text-3xl 
                                md:text-4xl 
                                lg:text-5xl 
                                h-full 
                                font-bold
                                mb-8">
                                    {data?.title}
                                </p>
                                <div className="flex flex-row items-center gap-5">
                                    <PlayButton movieId={data?.id}/>
                                    <FavoriteButton movieId={data?.id}/>
                                </div>


                        </div>


                    </div>

                    <div className="flex items-center gap-2 mt-4 px-11 py-8">
                                <p className="line-clamp-2 text-md lg:text-sm text-neutral-400">
                                  {data?.description}
                                </p>
                              </div>
                    
                              <div className="flex flex-row items-center gap-2 px-11 py-8">
                                <p className="font-semibold text-white text-md lg:text-sm">
                                  {data?.duration}
                                </p>
                                <LuDot className="text-zinc-600" size={20} />
                                <p className="font-semibold text-white text-md lg:text-sm">
                                  {data?.genre}
                                </p>
                              </div>

                </div>
            </div>
            
        </div>

    )

}

export default InfoModal
