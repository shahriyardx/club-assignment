import { useEffect, useState } from "react"

const useLocation = () => {
  const [location, setLocation] = useState<string>('Loading...')

  useEffect(() => {
      fetch('https://geolocation-db.com/json/')
        .then(response => response.json())
        .then(data => setLocation(`${data.city}, ${data.country_name}`))
        .catch(() => {
          setLocation('Dhaka, Bangladesh')
        })
  }, [])

  return location
}

export default useLocation