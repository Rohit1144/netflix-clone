import useMovie from "@/hooks/useMovie"
import { useRouter } from "next/router"

import { IoArrowBack } from "react-icons/io5";

const Watch = () => {

    const router = useRouter()

    const {movieId} = router.query

    const {data} = useMovie(movieId as string)

    return (
    <div className="h-screen w-screen bg-black">
        <nav className="
            flex
            flex-row
            items-center
            bg-black
            fixed
            w-full
            bg-opacity-70
            gap-8
            p-4
            z-10

        ">
            <IoArrowBack onClick={() => {
                router.push('/')
            }} size={40} className="text-white cursor-pointer"/>
            <p className="font-semibold text-white text-xl lg:text-3xl">
                <span className="font-light text-white text-xl lg:text-3xl mr-2">
                    Watching:
                </span>
                {data?.title}
            </p>
        </nav>
        <video className="h-full w-full" autoPlay controls src={data?.videoUrl}></video>
    </div>)
}

export default Watch