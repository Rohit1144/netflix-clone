import React from 'react'
import {isEmpty} from 'lodash'
import MovieCard from './MovieCard'

const MovieList = ({data, title}: {data: Record<string, any>[], title: string}) => {

    if (isEmpty(data)) {
        return null
    }

  return (
    <div className='mt-4 px-4 md:px-12 space-y-8'>
        <p className='text-white text-md font-semibold md:text-xl lg:text-2xl'>{title}</p>
        <div className='grid grid-cols-4 gap-4'>
            {data.map((movie) => {
                return (
                    <MovieCard key={movie.id} data={movie}/>
                )
            })}
        </div>    
    </div>
  )
}

export default MovieList