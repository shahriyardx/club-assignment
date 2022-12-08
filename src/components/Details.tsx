import { Dispatch, SetStateAction } from "react"
import { ExcerciseType } from "../hooks/useExcercise"
import { convertToDuration } from "../utils/time"

type Props = {
  selectedExcercises: Array<ExcerciseType>
  breakState: [number, Dispatch<SetStateAction<number>>]
}

const Details = ({ selectedExcercises, breakState }: Props) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold">Exercise Details</h2>

      <div className="p-5 bg-zinc-100 rounded-lg mt-5 flex items-center justify-between">
        <p className="text-xl font-[500]">Excercise Time</p>
        <p className="text-lg text-zinc-500">
          {convertToDuration(
            selectedExcercises.reduce(
              (prevVal, curVal) => prevVal + curVal.time_required,
              0
            )
          )}
        </p>
      </div>

      <div className="p-5 bg-zinc-100 rounded-lg mt-5 flex items-center justify-between">
        <p className="text-xl font-[500]">Break Time</p>
        <p className="text-lg text-zinc-500">{convertToDuration(breakState[0])}</p>
      </div>
    </div>
  )
}

export default Details
