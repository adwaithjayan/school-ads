import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { ESP_IP } from '@/const';
    
const ESP32_URL = `http://${ESP_IP}/api/status`; 

export async function GET(req: NextRequest) {


  try {
    const response = await axios.get(`${ESP32_URL}`);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error setting volume:', error);
    return NextResponse.json(
      { error: 'Failed to set volume' },
      { status: 500 }
    );
  }
}
