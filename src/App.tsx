import { useState } from "react"
import Excercise from "./components/Excercise"
import Layout from "./components/Layout"
import useExcercise, { ExcerciseType } from "./hooks/useExcercise"
import useLocation from "./hooks/useLocation"

const App = () => {
  const excercises = useExcercise()
  const location = useLocation()

  const [selectedExcercises, setSelectedExcercises] = useState<
    Array<ExcerciseType>
  >([])
  const [breakTime, setBreakTime] = useState<number>(0)

  const addExcercise = (excercise: ExcerciseType) => {
    setSelectedExcercises([...selectedExcercises, excercise])
  }

  return (
    <>
      <Layout
        location={location}
        selectedExcercises={selectedExcercises}
        breakState={[breakTime, setBreakTime]}
      >
        <p className="text-lg font-semibold mt-4">Select todays excercise</p>

        <div className="mt-4 grid grid-cols-3 gap-10">
          {excercises.map((excercise) => (
            <Excercise
              key={excercise.id}
              excercise={excercise}
              addExcercise={addExcercise}
            />
          ))}
        </div>
      </Layout>
    </>
  )
}

export default App
