import React from 'react'
import { ExcerciseType } from '../hooks/useExcercise'

type Props = {
  excercise: ExcerciseType
}

const Excercise = ({ excercise}: Props) => {
  return (
    <div className='bg-white p-5 rounded-md flex flex-col gap-3'>
      <img src={`/images/${excercise.img}`} alt={excercise.title} className="w-full aspect-[3/1] object-cover rounded-md" />

      <h2 className='text-2xl font-semibold mt-2'>{excercise.title}</h2>

      <p className='text-zinc-500 text-xl'>{excercise.description}</p>

      <div className='text-lg font-semibold'>
        <p>For Age: {excercise.for_age}</p>
        <p>Time Required: {excercise.time_required}s</p>
      </div>

      <div>
        <button className='px-5 py-3 bg-indigo-500 text-lg text-white w-full text-center rounded-md hover:bg-indigo-600'>Add to list</button>
      </div>
    </div>
  )
}

export default Excercise