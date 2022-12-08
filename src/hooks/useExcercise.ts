import { useEffect, useState } from "react"

export type ExcerciseType = {
  id: number
  img: string
  title: string
  description: string
  for_age: string
  time_required: number
}

const useExcercise = () => {
  const [data, setData] = useState<Array<ExcerciseType>>([])

  useEffect(() => {
    fetch('/excercise.json')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  return data
}

export default useExcercise