import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { ESP_IP } from '@/const';

const ESP32_URL = `http://${ESP_IP}/api/volume`; // ESP32 IP

export async function GET(req: NextRequest) {
  const level = req.nextUrl.searchParams.get('level');

  if (!level) {
    return NextResponse.json({ error: 'Volume level is required' }, { status: 400 });
  }

  try {
    const response = await axios.get(`${ESP32_URL}?level=${level}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error setting volume:', error);
    return NextResponse.json(
      { error: 'Failed to set volume' },
      { status: 500 }
    );
  }
}
