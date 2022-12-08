import React, { Dispatch, SetStateAction, useState } from "react"
import { ExcerciseType } from "../hooks/useExcercise"
import Header from "./Header"
import Sidebar from "./Sidebar"

import { BiMenu } from "react-icons/bi"

type Props = {
  children: React.ReactNode
  breakState: [number, Dispatch<SetStateAction<number>>]
  selectedExcercises: Array<ExcerciseType>
  location: string
  complete: () => void
}

const Layout = ({
  children,
  breakState,
  selectedExcercises,
  location,
  complete,
}: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto,450px]">
      <div className="w-full max-w-7xl mx-auto p-10 xl:p-20 max-h-screen overflow-y-auto hide-scrollbar">
        <Header />
        {children}
      </div>

      <Sidebar
        open={open}
        close={() => setOpen(false)}
        complete={complete}
        location={location}
        selectedExcercises={selectedExcercises}
        breakState={breakState}
      />

      <BiMenu
        onClick={() => setOpen(true)}
        className="text-4xl fixed top-5 right-5 md:hidden"
      />
    </div>
  )
}

export default Layout
