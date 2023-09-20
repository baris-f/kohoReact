import Image from 'next/image'

export type House = {
    name: string;
    description: string;
    price: number;
    img: string;
    rating: number;
};

type Props = {
    house: House;
}

const HouseCard: React.FC<Props> = ({house}) => {
    const { name, description, price, img, rating } = house;

  return (
      <div className="rounded-md flex flex-col overflow-hidden">
          <a href="/house">
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
                  <p className="text-sm"> {rating}</p>
              </div>
              <p className="text-base text-slate-900">{description}</p>
              <p className="pt-2 font-bold">{price} </p>
          </div>
          </a>
      </div>
  )
}
 export default  HouseCard;