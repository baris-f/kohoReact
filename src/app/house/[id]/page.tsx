"use client"
import Image from "next/image";
import {House} from "@/components/housecard";
import {useCallback, useEffect, useState} from "react";

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

export default function Home({params}) {
    const { data, loading } = useTest();
    const currHouse = data?.[params.id]

    if (!data || loading || !currHouse) {
        return <div className="text-center py-12 font-bold">Loading...</div>
    }

    return (
        <main className="w-full mx-auto p-6 flex justify-center gap-4 my-20">
            <Image
                src={currHouse.img}
                alt=""
                width={300}
                height={300}
                className="h-[300px] w-[300px] object-cover rounded-md"
            />
            <div className="py-2 pl-1 text-black flex flex-col">
                <h3 className="text-4xl font-bold">{currHouse.name}</h3>
                <p className="text-xl pt-2 font-bold">{currHouse.price} ₩</p>
                <p className="text-base text-slate-900">{currHouse.description}</p>
                <p className="text-base text-slate-900 font-bold">{currHouse.number}</p>
                <p className="text-base text-slate-900">Can be contacted via phone in:
                    English, 한국어</p>
                <div className="pt-4">
                    <a href="/soon" className="rounded-md bg-primary py-2 px-4 text-white font-bold text-xl hover:scale-105">Reserve</a>
                </div>

            </div>
        </main>
    )
}
