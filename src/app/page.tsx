import Image from 'next/image'
import Grid from '../components/grid.tsx'
import logo from '../../public/images/logo.png'
import Footer from "@/components/footer";
import Search from "@/components/search";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-24 py-8">
        <Search className="mb-2" >
        </Search>
        <Grid>
        </Grid>
    </main>
  )
}
