import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children}: Props) => {
  return (
    <div className='grid grid-cols-[auto,400px]'>
      <div className='w-full max-w-7xl mx-auto p-20'>
        <Header />
        {children}
      </div>

      <Sidebar />
    </div>
  )
}

export default Layout