import React from "react"
import HealthInfo from "./HealthInfo"
import Profile from "./Profile"

const Sidebar = () => {
  return <div className="min-h-screen bg-white p-10">
    <Profile />
    <HealthInfo />
  </div>
}

export default Sidebar
