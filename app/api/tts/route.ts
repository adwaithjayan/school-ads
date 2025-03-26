import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { ESP_IP } from '@/const';

const ESP32_URL = `http://${ESP_IP}/api/tts` 

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const response = await axios.post(ESP32_URL, { text });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to communicate with ESP32' },
      { status: 500 }
    );
  }
}
