import Image from 'next/image'
import HouseCard, { House } from "@/components/housecard";
import {useCallback, useEffect, useState} from "react";
import PulseCard from "@/components/pulsecard";

// import { homeList } from "@/utils/data";

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/homes', { method: "GET"});

  return res.json();
}

function useTest() {
  const [value, setValue] = useState<House[] | null>(null);
  const [loading, setLoading] = useState(false)

  const loadData = useCallback(async () => {
    setLoading(true);
    setValue(await getData());
    setLoading(false);
  }, [])

  useEffect(() => {
    loadData();
  }, [])
  return { data: value, loading };
}

type Props = {
  children: JSX.Element
}
const Grid: React.FC<Props> = ({children}) => {
  const { data, loading } = useTest();

  if (!data || loading)   return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols4 xl:grid-cols-5 gap-6">
        {(Array(9).fill(0)).map((_,index) => (<PulseCard key={'loading'+index} />)
        )}
        {children}
      </div>
  )
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols4 xl:grid-cols-5 gap-6">
        {data.map((house, index) => (<HouseCard key={index} house={house} />)
        )}
      {children}
    </div>
  )
}

export default Grid;