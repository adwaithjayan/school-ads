import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { ESP_IP } from '@/const';

const ESP32_URL =`http://${ESP_IP}/api/schedules`

// GET: Fetch schedule from ESP32
export async function GET() {
  try {
    const response = await axios.get(ESP32_URL);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching schedules:', error);
    return NextResponse.json(
      { error: 'Failed to fetch schedules' },
      { status: 500 }
    );
  }
}

// POST: Add a new schedule
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const response = await axios.post(ESP32_URL, data);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error adding schedule:', error);
    return NextResponse.json(
      { error: 'Failed to add schedule' },
      { status: 500 }
    );
  }
}
