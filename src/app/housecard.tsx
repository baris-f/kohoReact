import Image from 'next/image'
import img1 from "@/assets/house1-1.png";
import img2 from "@/assets/house1-2.png";
import img3 from "@/assets/house1-3.png";

export default function HouseCard() {
  return (
      <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
              <Image
                  src={img1}
                  alt="Koho Logo"
                  width="full"
                  priority
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
              <Image
                  src={img2}
                  alt="Koho Logo"
                  width="full"
                  priority
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a>
                  <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
              <Image
                  src={img3}
                  alt="Koho Logo"
                  width="full"
                  priority
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">❮</a>
                  <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
          </div>
      </div>
  )
}
