import { NextResponse } from 'next/server';
import House from '@/types/house';
import {homeList} from '@/utils/data.ts';



export async function GET(request: Request) {

    return NextResponse.json(homeList as House[])
}