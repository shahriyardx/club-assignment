import React, { Dispatch, SetStateAction } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

type Props = {
  children: React.ReactNode
  breakState: [number, Dispatch<SetStateAction<number>>]
}

const Layout = ({ children, breakState}: Props) => {
  return (
    <div className='grid grid-cols-[auto,450px]'>
      <div className='w-full max-w-7xl mx-auto p-20'>
        <Header />
        {children}
      </div>

      <Sidebar breakState={breakState} />
    </div>
  )
}

export default Layout