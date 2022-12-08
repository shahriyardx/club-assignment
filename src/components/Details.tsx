import { ExcerciseType } from "../hooks/useExcercise"

type Props = {
  selectedExcercises: Array<ExcerciseType>
  breakTime: number
}

const Details = ({ selectedExcercises, breakTime }: Props) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold">Exercise Details</h2>

      <div className="p-5 bg-zinc-100 rounded-lg mt-5 flex items-center justify-between">
        <p className="text-xl font-[500]">Excercise Time</p>
        <p className="text-lg text-zinc-500">
          {selectedExcercises.reduce(
            (prevVal, curVal) => prevVal + curVal.time_required,
            0
          )}{" "}
          Seconds
        </p>
      </div>

      <div className="p-5 bg-zinc-100 rounded-lg mt-5 flex items-center justify-between">
        <p className="text-xl font-[500]">Break Time</p>
        <p className="text-lg text-zinc-500">{breakTime} Seconds</p>
      </div>
    </div>
  )
}

export default Details
