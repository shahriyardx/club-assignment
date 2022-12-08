import { FaMapMarkerAlt } from "react-icons/fa"

type Props = {
  location: string
}

const Profile = ({ location }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <img src="/images/profile.jpg" alt="" className="w-16 h-16 rounded-lg" />
      <div>
        <h2 className="text-2xl font-bold">Shahriyar Alam</h2>
        <p className="flex items-center gap-2 mt-1">
          <FaMapMarkerAlt className="text-2xl text-slate-400" />
          <span className="text-zinc-500">{location}</span>
        </p>
      </div>
    </div>
  )
}

export default Profile
