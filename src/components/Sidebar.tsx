import React, { Dispatch, SetStateAction } from "react"
import { ExcerciseType } from "../hooks/useExcercise"
import Break from "./Break"
import Details from "./Details"
import HealthInfo from "./HealthInfo"
import Profile from "./Profile"

type Props = {
  breakState: [number, Dispatch<SetStateAction<number>>]
  selectedExcercises: Array<ExcerciseType>
  breakTime: number
  location: string
}

const Sidebar = ({ breakState, selectedExcercises, breakTime, location }: Props ) => {
  return <div className="min-h-screen bg-white p-10">
    <Profile location={location} />
    <HealthInfo />
    <Break setBreak={breakState[1]} />
    <Details selectedExcercises={selectedExcercises} breakTime={breakTime} />

    <button className="px-5 py-5 text-xl w-full mt-20 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md">Activity Completed</button>
  </div>
}

export default Sidebar
