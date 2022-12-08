import React from 'react'

type InfoProps = {
  amount: number
  unit?: string
  specifier: string
}

const Info = ({ amount, unit, specifier }: InfoProps) => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl font-black text-zinc-700'>{amount}<span className='text-base text-zinc-400 font-normal'>{unit}</span> </h1>
      <p className='text-lg text-zinc-500'>{specifier}</p>
    </div>
  )
}

const HealthInfo = () => {
  return (
    <div className='p-5 bg-zinc-100 rounded-lg mt-10 grid grid-cols-3 gap-2'>
      <Info amount={61} unit="kg" specifier="Weight" />
      <Info amount={5.11} specifier="Height" />
      <Info amount={21} unit="yrs" specifier="Age" />
    </div>
  )
}

export default HealthInfo