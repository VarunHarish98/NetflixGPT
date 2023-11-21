import React from 'react'
import { tmdbURL } from '../constants/constants'

export const MovieCard = ({key, moviesPoster}) => {
    console.log(tmdbURL + moviesPoster)
  return (
    <div className='w-52'>
        <img src={tmdbURL + moviesPoster} alt='Movie Card Text'/>
    </div>
  )
}
