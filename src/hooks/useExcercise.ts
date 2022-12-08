import { useState } from "react"

export type Excercise = {
  id: number
  img: string
  title: string
  description: string
  for_age: string
  time_required: number
}

const useExcercise = () => {
  const [data, setData] = useState<Array<Excercise>>([])

  fetch('/excercise.json')
    .then(response => response.json())
    .then(data => setData(data))

  return data
}

export default useExcercise