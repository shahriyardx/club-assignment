import React from "react"
import Break from "./Break"
import Details from "./Details"
import HealthInfo from "./HealthInfo"
import Profile from "./Profile"

const Sidebar = () => {
  return <div className="min-h-screen bg-white p-10">
    <Profile />
    <HealthInfo />
    <Break />
    <Details />

    <button className="px-5 py-5 text-xl w-full mt-20 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md">Activity Completed</button>
  </div>
}

export default Sidebar
