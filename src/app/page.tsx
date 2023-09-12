import Image from 'next/image'
import Grid from './grid.tsx'
import logo from '../assets/logo.png'
import Footer from "@/app/footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          >
            <Image
              src={logo}
              alt="Koho Logo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <Grid>

      </Grid>
      <Footer/>
    </main>
  )
}
