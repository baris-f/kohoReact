import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const homeList = [
        {
            price: '₩250K/Month',
            description: 'Sinchon Station',
            name: 'Sinchon Goshiwon',
            img: '/images/goshiwon-1.webp',
            address: '37-22 Jongam-ro 3-gil, Jongam-dong, Seongbuk-gu, Seoul, South Korea',
            number: '+8229228088',
            id: 1
        },
        {
            price: '₩500K/Month',
            description: 'Sinchon Station',
            name: 'Monostay Sinchon Branch',
            img: '/images/gw-2.webp',
            address: '37-22 Jongam-ro 3-gil, Jongam-dong, Seongbuk-gu, Seoul, South Korea',
            number: '+8229228088',
            id: 2
        },
        {
            price: '₩350K/Month',
            description: 'Sinchon Station',
            name: 'Residence the Fore',
            img: '/images/gw-4.webp',
            address: '37-22 Jongam-ro 3-gil, Jongam-dong, Seongbuk-gu, Seoul, South Korea',
            number: '+8229228088',
            id: 3
        },
        {
            price: '₩330K/Month',
            description: 'Sinchon Station',
            name: 'JY House',
            img: '/images/g2-6.webp',
            address: '37-22 Jongam-ro 3-gil, Jongam-dong, Seongbuk-gu, Seoul, South Korea',
            number: '+8229228088',
            id: 4
        },
        {
            price: '₩380K/Month',
            description: 'Sinchon Station',
            name: 'Arderfore',
            img: '/images/gw-7.webp',
            address: '37-22 Jongam-ro 3-gil, Jongam-dong, Seongbuk-gu, Seoul, South Korea',
            number: '+8229228088',
            id: 5
        },
        {
            price: '₩290K/Month',
            description: 'Sinchon Station',
            name: 'Parisella',
            img: '/images/gw-8.webp',
            address: '37-22 Jongam-ro 3-gil, Jongam-dong, Seongbuk-gu, Seoul, South Korea',
            number: '+8229228088',
            id: 6
        },
        {
            price: '₩450K/Month',
            description: 'Hongik University Station',
            name: 'Stay On ',
            img: '/images/gw-9.webp',
            address: '37-22 Jongam-ro 3-gil, Jongam-dong, Seongbuk-gu, Seoul, South Korea',
            number: '+8229228088',
            id: 7
        },
        {
            price: '₩360K/Month',
            description: 'Sinchon Station',
            name: 'Open House Sinchon',
            img: '/images/gw-11.webp',
            address: '37-22 Jongam-ro 3-gil, Jongam-dong, Seongbuk-gu, Seoul, South Korea',
            number: '+8229228088',
            id: 8
        },
        {
            price: '₩290K/Month',
            description: 'Hongik University Station',
            name: 'Easy Pine House Hongdae',
            img: '/images/gw-12.webp',
            address: '37-22 Jongam-ro 3-gil, Jongam-dong, Seongbuk-gu, Seoul, South Korea',
            number: '+8229228088',
            id: 9
        },
        {
            price: '₩350K/Month',
            description: 'Sinchon Station',
            name: 'Oven House Sinchon',
            img: '/images/gw-13.webp',
            address: '37-22 Jongam-ro 3-gil, Jongam-dong, Seongbuk-gu, Seoul, South Korea',
            number: '+8229228088',
            id: 10
        },
    ];

    return NextResponse.json(homeList)
}