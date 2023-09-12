import Image from 'next/image'
import HouseCard from "@/app/housecard";

export default function Grid() {
  return (
    <div className="grid grid-cols-3">
        <HouseCard/>
        <HouseCard/>
        <HouseCard/>
    </div>
  )
}
