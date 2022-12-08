import Excercise from './components/Excercise'
import Layout from './components/Layout'
import useExcercise from './hooks/useExcercise'

const App = () => {
  const excercises = useExcercise()

  return (
    <>
      <Layout>
        <p className='text-lg font-semibold mt-4'>Select todays excercise</p>

        <div className='mt-4 grid grid-cols-3 gap-5'>
          {excercises.map(excercise => <Excercise key={excercise.id} excercise={excercise}  />)}
        </div>
      </Layout>
    </>
  )
}

export default App