import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { ESP_IP } from '@/const';

const ESP32_URL = `http://${ESP_IP}/api/play`; // ESP32 IP

export async function GET(req: NextRequest) {
  const file = req.nextUrl.searchParams.get('file');

  if (!file) {
    return NextResponse.json({ error: 'File number is required' }, { status: 400 });
  }

  try {
    const response = await axios.get(`${ESP32_URL}?file=${file}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error playing file:', error);
    return NextResponse.json(
      { error: 'Failed to play file' },
      { status: 500 }
    );
  }
}
