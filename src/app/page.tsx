import Image from 'next/image'
import Search from "@/components/search";
import HouseCard from "@/components/housecard";
import House from '@/types/house';
import checkEnvironment from "@/utils/checkEnv";

const getData = async () => {
  // await new Promise(resolve => setTimeout(resolve, 2000)); Uncomment to test and check the loading component
  const res = await fetch(checkEnvironment().concat('/api/homes'), { method: "GET"});
  return res.json();
}

export default async function Home() {
  const data: House[] = await getData();
  return (
    <main className="flex flex-col items-center justify-between px-24 py-8">
        <Search>
            <div></div>
        </Search>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols4 xl:grid-cols-5">
          {data.map((house, index) => (<HouseCard key={index} house={house} />)
        )}
        </div>
    </main>
  )
}