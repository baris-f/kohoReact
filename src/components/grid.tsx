import Image from 'next/image'
import HouseCard from "@/components/housecard";
// import { homeList } from "@/utils/data";

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/homes', { method: "GET"});

  return res.json();
}

export default async function Grid() {
  const homeList = await getData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols4 xl:grid-cols-5 gap-6">
        {homeList.map((house) => (<HouseCard house={house} />)
        )}
    </div>
  )
}
