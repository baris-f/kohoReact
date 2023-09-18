'use client';

import Image from 'next/image'
import Grid from '@/components/grid'
import logo from '../../public/images/logo.png'
import Footer from "@/components/footer";
import Search from "@/components/search";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-24 py-8">
        <Search>
            <div></div>
        </Search>
        <Grid>
            <div></div>
        </Grid>
    </main>
  )
}