import { useState } from "react"
import Break from "./Break"
import Details from "./Details"
import HealthInfo from "./HealthInfo"
import Profile from "./Profile"

import { BiX } from "react-icons/bi"

import { Dispatch, SetStateAction } from "react"
import { ExcerciseType } from "../hooks/useExcercise"

type Props = {
  breakState: [number, Dispatch<SetStateAction<number>>]
  selectedExcercises: Array<ExcerciseType>
  location: string
  complete: () => void
  open: boolean
  close: () => void
}

const Sidebar = ({
  breakState,
  selectedExcercises,
  location,
  complete,
  open,
  close,
}: Props) => {
  return (
    <div
      className={`h-screen bg-white p-10 fixed md:static top-0 w-full max-w-[450px] md:w-full ${
        open ? "right-0" : "-right-[100%] md:right-0"
      } z-50`}
    >
      <BiX
        onClick={close}
        className="absolute text-4xl text-red-500 top-3 left-3 md:hidden"
      />
      <Profile location={location} />
      <HealthInfo />
      <Break setBreak={breakState[1]} />
      <Details
        selectedExcercises={selectedExcercises}
        breakState={breakState}
      />

      <button
        onClick={() => complete()}
        className="px-5 py-5 text-xl w-full mt-20 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md"
      >
        Activity Completed
      </button>
    </div>
  )
}

export default Sidebar
