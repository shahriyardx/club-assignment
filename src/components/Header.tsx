import React from 'react'
import { CiDumbbell } from "react-icons/ci"

const Header = () => {
  return (
    <div className='flex items-center gap-2 text-indigo-500'>
      <CiDumbbell className='text-4xl' />
      <span className='text-2xl uppercase font-bold'>ultra-active-club</span>
    </div>
  )
}

export default Header