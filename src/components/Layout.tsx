import React from 'react'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children}: Props) => {
  return (
    <div className='grid grid-cols-[auto,300px]'>
      <div className='w-full max-w-7xl mx-auto p-20'>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout