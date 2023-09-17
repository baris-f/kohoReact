import Image from "next/image";
import {House} from "@/components/housecard";

type Props = {
    house: House;
}


const Home: React.FC<Props> = ({house}) => {
    Home.defaultProps = {
        house: {name:'tmp', description: 'tmp', price:23, img:"/images/house1-1.png", rating:3}
    }
    const { name, description, price, img, rating } = house;
  return (
      <main className="w-full max-w-md mx-auto p-6">
          <Image
              src={img}
              alt=""
              width={200}
              height={100}
              className="h-[200px] object-cover rounded-md"
          />
          <div className="py-2 pl-1 text-black flex flex-col">
              <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">{name}</h3>
                  <p className="text-sm">★ {rating}</p>
              </div>
              <p className="text-base text-slate-900">{description}</p>
              <p className="pt-2 font-bold">{price} ₩</p>
          </div>
      </main>
  )
}

export default Home;