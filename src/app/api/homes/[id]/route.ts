import { NextResponse } from 'next/server';
import House from '@/types/house';
import {homeList} from '@/utils/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') || 0;
  const house: House = homeList[id as number]; // Shitty TS hack

    return NextResponse.json(house)
}