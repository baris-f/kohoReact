import Image from "next/image";

export default function Home() {
  return (
      <main className="w-full max-w-md p-6 mx-auto">
          <Image
              src={"/images/house1-1.png"}
              alt=""
              width={200}
              height={100}
              className="h-[200px] object-cover rounded-md"
          />
          <div className="flex flex-col py-2 pl-1 text-black">
              <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">House</h3>
                  <p className="text-sm">★ {3}</p>
              </div>
              <p className="text-base text-slate-900">Great House</p>
              <p className="pt-2 font-bold">666 ₩</p>
          </div>
      </main>
  )
}
