import Image from "next/image";
import House from '@/types/house';
import formatKRW from '@/utils/formatKRW';
import checkEnvironment from '@/utils/checkEnv';



const getData = async () => {
    // await new Promise(resolve => setTimeout(resolve, 2000)); // Uncomment to test and check the loading component
    const res = await fetch(checkEnvironment().concat('/api/homes'), { method: "GET"});

    console.log(res.headers.get('content-type'))
    if (res.headers.get('content-type') != 'application/json')
        return null;
    return res.json();
}

export default async function HousePage({params}: {params: { id: number}}) {
    const data: House[] = await getData();
    let house = data[params.id - 1];
    if (house == undefined)
        house = {
            price: 350000,
            description: 'Sinchon Station',
            name: 'Oven House Sinchon',
            img: '/images/gw-13.webp',
            address: '37-22 Jongam-ro 3-gil, Jongam-dong, Seongbuk-gu, Seoul, South Korea',
            phoneNumber: '+8229228088',
            id: 10,
        }

    return (
        <main className="flex justify-center w-full gap-4 p-6 mx-auto my-20">
            <Image
                src={house.img}
                alt=""
                width={300}
                height={300}
                className="h-[300px] w-[300px] object-cover rounded-md"
            />
            <div className="flex flex-col py-2 pl-1 text-black">
                <h3 className="text-4xl font-bold">{house.name}</h3>
                <p className="pt-2 text-xl font-bold">{formatKRW(house.price)}/month</p>
                <p className="text-base text-slate-900">{house.description}</p>
                <p className="text-base font-bold text-slate-900">{house.phoneNumber}</p>
                <p className="text-base text-slate-900">Can be contacted via phone in:
                    English, 한국어</p>
                <div className="pt-4">
                    <a href="/soon" className="px-4 py-2 text-xl font-bold text-white rounded-md bg-primary hover:scale-105">Reserve</a>
                </div>

            </div>
        </main>
    )
}
