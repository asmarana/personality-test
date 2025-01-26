import { questions } from '@/data';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(questions);
}
