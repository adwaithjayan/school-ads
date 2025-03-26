"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Slider } from "./ui/slider";
import axios from "axios";
import { toast } from "sonner"




interface EspData {
    device_ip: string;
    connected: boolean;
  }

export default function Settings() {
    const [volume,setVolume] =useState<number>(15);
    const [espData, setEspData] = useState<EspData | null>({
        device_ip: '',
        connected: false,
    });

  useEffect(() => {
    
    fetchData();

  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/info');
      if (!response.ok) {
        throw new Error('Failed to fetch ESP32 data');
      }
      const data = await response.json();
      setEspData(data);
    } catch (error) {
      console.error('Error fetching ESP32 data:', error);
    }
  };


const setVolumeLevel = async () => {
    try {
      await axios.get(`/api/volume?level=${volume}`);
      toast.success(`Volume Set to ${volume}`);
    } catch (error) {
      console.error(error);
      toast.error('Error setting volume');
    }
  };
  

  return (
    <Card>
        <CardHeader className="space-y-3">
            <CardTitle className="text-[#2c3e50]  border-b pb-5 text-2xl font-bold">System Settings</CardTitle>
          </CardHeader>
          <CardContent>
                <div className="space-y-3">
                    <CardTitle className="text-[#2c3e50]  text-lg font-bold">Volume Control</CardTitle>
                    <div className="flex flex-col space-y-6 mb-8">
                        <p className="text-[#737373]">Announcement Volume: {volume}</p>
                        <Slider  className="w-[60%] text-blue-500"  onValueChange={(v)=>setVolume(v[0])}  defaultValue={[volume]} max={100} step={1} />
                        <div className="flex-none">
                            <Button onClick={setVolumeLevel} className="bg-[#3498db] rounded-md text-[16px] py-4 px-4 hover:-translate-y-0.5  transition-all duration-300 hover:bg-[#4CAF50]/85  text-white">Apply Volume Setting</Button>
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <h4 className="text-[#2c3e50] mb-3 text-lg font-bold">System Information</h4>
                        <p className="text-md text-black/80 mb-1"><strong>Device IP: </strong>{espData ? <span>{espData?.device_ip}</span> : <span>Loading...</span>}</p>
                        <p className="text-md text-black/80 mb-1"><strong>Connection Status: </strong>{espData  ? <span>{espData?.connected === true ? 'Connected' : 'Disconnected'}</span> : <span>Loading...</span>}</p>
                        <p className="text-md text-black/80"><strong>Firmware Version:</strong> 1.0.0</p>
                    </div>

                </div>
          </CardContent>
    </Card>
  )
}