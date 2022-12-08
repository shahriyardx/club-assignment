import React, { Dispatch, SetStateAction } from "react"
import { ExcerciseType } from "../hooks/useExcercise"
import Header from "./Header"
import Sidebar from "./Sidebar"

type Props = {
  children: React.ReactNode
  breakState: [number, Dispatch<SetStateAction<number>>]
  selectedExcercises: Array<ExcerciseType>
}

const Layout = ({ children, breakState, selectedExcercises }: Props) => {
  return (
    <div className="grid grid-cols-[auto,450px]">
      <div className="w-full max-w-7xl mx-auto p-20">
        <Header />
        {children}
      </div>

      <Sidebar
        selectedExcercises={selectedExcercises}
        breakTime={breakState[0]}
        breakState={breakState}
      />
    </div>
  )
}

export default Layout
