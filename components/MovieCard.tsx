import React from 'react'
import { IoPlaySharp } from "react-icons/io5";
import { LuDot } from "react-icons/lu";

const MovieCard = ({data}: {data: Record<string, any>}) => {
  return (
    <div className='group bg-zinc-900 col-span relative h-[12vw]'>
        <img className='
            object-cover
            rounded-md
            h-[12vw]
            cursor-pointer
            transition
            duration
            group-hover:opacity-90
            sm:group-hover:opacity-0
            delay-300
            w-full
            shadow-lg
        ' 
        src={data.thumbnailUrl} alt="thumbnail" />
        <div className='
            group-hover:-translate-y-[3vw]
            group-hover:opacity-100
            transition
            duration-200
            z-10
            scale-0
            group-hover:scale-110
            absolute
            top-0
            invisible
            sm:visible
            delay-300
            opacity-0
        '>
            <img className='
                object-cover
                rounded-t-md
                h-[12vw]
                w-full
                transition
                duration
                cursor-pointer
                shadow-xl

            ' src={data.thumbnailUrl} alt="thumbnail" />
            <div className='
            absolute
            rounded-b-md
            bg-zinc-800
            p-2
            lg:p-4
            transition
            shadow-md
            w-full
            '>
                <div className='flex flex-row items-center gap-2'>
                    <div className='
                        bg-white
                        rounded-full
                        h-6
                        w-6
                        lg:w-10
                        lg:h-10
                        flex
                        items-center
                        justify-center
                        transition
                        hover:bg-neutral-300
                        cursor-pointer' onClick={() => {}}>
                         <IoPlaySharp size={17}/>
                    </div>
                </div>

                <div className='flex items-center gap-2 mt-4'>
                    <p className='line-clamp-2 text-md lg:text-sm text-neutral-400'>{data.description}</p>
                </div>

                <div className='flex flex-row items-center gap-2 mt-3'>
                    <p className='font-semibold text-white text-md lg:text-sm'>
                        {data.duration}
                    </p>
                    <LuDot className='text-zinc-600' size={20}/>
                    <p className='font-semibold text-white text-md lg:text-sm'>
                        {data.genre}
                    </p>
                </div>


            </div>
        </div>
    </div>
  )
}

export default MovieCard