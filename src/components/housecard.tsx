import Image from 'next/image'
import House from '@/types/house';
import formatKRW from '@/utils/formatKRW';

type Props = {
    house: House;
}

const HouseCard: React.FC<Props> = ({house}) => {
    const { name, description, price, img, rating, id } = house;

  return (
      <div className="flex flex-col overflow-hidden rounded-md">
          <a href={`/house/${id}`}>
          <Image
              src={img}
              alt=""
              width={200}
              height={100}
              className="h-[200px] object-cover rounded-md"
          />
          <div className="flex flex-col py-2 pl-1 text-black">
              <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold truncate overflow-hidden max-w-[200px]">{name}</h3>
                  <p className="text-sm"> {rating}</p>
              </div>
              <p className="text-base text-slate-900">{description}</p>
              <p className="pt-2 font-bold">{formatKRW(price)}/month</p>
          </div>
          </a>
      </div>
  )
}
 export default  HouseCard;