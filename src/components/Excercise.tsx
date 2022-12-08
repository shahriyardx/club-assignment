import React, { useState } from "react"
import { ExcerciseType } from "../hooks/useExcercise"

type Props = {
  excercise: ExcerciseType
  addExcercise: (excercise: ExcerciseType) => void
}

const Excercise = ({ excercise, addExcercise }: Props) => {
  const [selected, setSelected] = useState<boolean>(false)

  const _addExcercise = (excercise: ExcerciseType) => {
    addExcercise(excercise)
    setSelected(true)
    setTimeout(() => {
      setSelected(false)
    }, 2000)
  }

  return (
    <div className="bg-white p-7 rounded-lg flex flex-col gap-3">
      <img
        src={`/images/${excercise.img}`}
        alt={excercise.title}
        className="w-full aspect-[3/1.3] object-cover rounded-lg"
      />

      <h2 className="text-2xl font-semibold mt-2">{excercise.title}</h2>

      <p className="text-zinc-500 text-xl">{excercise.description}</p>

      <div className="text-lg font-semibold">
        <p>For Age: {excercise.for_age}</p>
        <p>Time Required: {excercise.time_required}s</p>
      </div>

      <div className="mt-auto">
        <button
          onClick={() => _addExcercise(excercise)}
          className={`px-5 py-3  text-lg text-white w-full text-center rounded-md  ${
            selected
              ? "bg-green-500 hover:bg-green-600"
              : "bg-indigo-500 hover:bg-indigo-600"
          }`}
        >
          {selected ? "Added" : "Add to list"}
        </button>
      </div>
    </div>
  )
}

export default Excercise
