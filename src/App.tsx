import React from 'react'
import Layout from './components/Layout'
import useExcercise from './hooks/useExcercise'

const App = () => {
  const excercises = useExcercise()

  return (
    <>
      <Layout>
        <p className='text-lg font-semibold mt-4'>Select todays excercise</p>
      </Layout>
    </>
  )
}

export default App