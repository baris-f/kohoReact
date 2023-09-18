import Image from "next/image";
import {House} from "@/components/housecard";


export default function Home() {
  return (
      <main className="w-full max-w-md mx-auto p-6">
          <Image
              src={"/images/house1-1.png"}
              alt=""
              width={200}
              height={100}
              className="h-[200px] object-cover rounded-md"
          />
          <div className="py-2 pl-1 text-black flex flex-col">
              <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">House</h3>
                  <p className="text-sm">★ {3}</p>
              </div>
              <p className="text-base text-slate-900">Great House</p>
              <p className="pt-2 font-bold">666 ₩</p>
          </div>
      </main>
  )
}
