import React from "react"

type BreakProps = {
  seconds: number
}

const BreakButton = ({ seconds }: BreakProps) => {
  return (
    <button className="w-12 h-12 flex items-center justify-center bg-indigo-500 text-white rounded-full">
      {seconds}
    </button>
  )
}

const Break = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold">Add a break</h2>

      <div className="p-5 bg-zinc-100 rounded-lg mt-5 grid grid-cols-5 gap-2">
        {[10, 20, 30, 40, 50].map((second) => (
          <BreakButton key={second} seconds={second} />
        ))}
      </div>
    </div>
  )
}

export default Break
