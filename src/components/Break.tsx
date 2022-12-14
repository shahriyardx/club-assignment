import React, { Dispatch, SetStateAction } from "react"

type BreakProps = {
  seconds: number
  setBreak: Dispatch<SetStateAction<number>>
}

const BreakButton = ({ seconds, setBreak }: BreakProps) => {
  return (
    <button
      onClick={() => setBreak((prev) => prev + seconds)}
      className="w-12 h-12 flex items-center justify-center bg-zinc-200 text-black hover:bg-indigo-500 hover:text-white rounded-full"
    >
      {seconds}
    </button>
  )
}

type Props = {
  setBreak: Dispatch<SetStateAction<number>>
}

const Break = ({ setBreak }: Props) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold">Add a break</h2>

      <div className="p-5 bg-zinc-100 rounded-lg mt-5 grid grid-cols-5 gap-2">
        {[10, 20, 30, 40, 50].map((second) => (
          <BreakButton setBreak={setBreak} key={second} seconds={second} />
        ))}
      </div>
    </div>
  )
}

export default Break
