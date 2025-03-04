import { useRouter } from 'next/router'
import React from 'react'
import { IoPlaySharp } from "react-icons/io5";

const PlayButton = ({movieId}: {movieId: string}) => {

  const router = useRouter()

  return (
    <button onClick={() => {
      router.push(`/watch/${movieId}`)
    }} className='
      bg-white
      py-1
      px-2
      md:px-4
      md:py-2
      font-semibold
      flex
      flex-row
      items-center
      rounded-md 
      hover:bg-neutral-300
      transition
      w-auto
    '>
      <IoPlaySharp size={25} className='mr-1'/>
      Play
    </button>
  )
}

export default PlayButton