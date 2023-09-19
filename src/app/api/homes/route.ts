import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const homeList = [
        {
            name: '₩250K/Month',
            description: 'Sinchon Station',
            price: 'Sinchon Goshiwon',
            img: '/images/goshiwon-1.webp',
            rating: '',
        },
        {
            name: '₩500K/Month',
            description: 'Sinchon Station',
            price: 'Monostay Sinchon Branch',
            img: '/images/gw-2.webp',
            rating: '',
        },
        {
            name: '₩280K/Month',
            description: 'Sinchon Station',
            price: 'Solwon Room Living Tel',
            img: '/images/house3-1.png',
            rating: '',
        },
        {
            name: '₩350K/Month',
            description: 'Sinchon Station',
            price: 'Residence the Fore',
            img: '/images/gw-4.webp',
            rating: '',
        },
        {
            name: '₩330K/Month',
            description: 'Sinchon Station',
            price: 'JY House',
            img: '/images/g2-6.webp',
            rating: '',
        },
        {
            name: '₩380K/Month',
            description: 'Sinchon Station',
            price: 'Arderfore',
            img: '/images/gw-7.webp',
            rating: '',
        },
        {
            name: '₩290K/Month',
            description: 'Sinchon Station',
            price: 'Parisella',
            img: '/images/gw-8.webp',
            rating: '',
        },
        {
            name: '₩450K/Month',
            description: 'Hongik University Station',
            price: 'Stay On ',
            img: '/images/gw-9.webp',
            rating: '',
        },
        {
            name: '₩360K/Month',
            description: 'Sinchon Station',
            price: 'Open House Sinchon',
            img: '/images/gw-11.webp',
            rating: '',
        },
        {
            name: '₩290K/Month',
            description: 'Hongik University Station',
            price: 'Easy Pine House Hongdae',
            img: '/images/gw-12.webp',
            rating: '',
        },
        {
            name: '₩350K/Month',
            description: 'Sinchon Station',
            price: 'Oven House Sinchon',
            img: '/images/gw-13.webp',
            rating: '',
        },
    ];

    return NextResponse.json(homeList)
}