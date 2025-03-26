"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { toast } from "sonner";

export default function Create() {
  const [text,setText]=useState("");
  const [loading,setLoading]=useState(false);

  const convertToSpeech=async()=>{
    setLoading(true);
    try {
      await axios.post('/api/tts', { text });
      toast.success('TTS Sent Successfully!');
      setText('');
    } catch (error) {
      console.error(error);
      toast.error('Error sending TTS');
    }
    finally{
      setLoading(false);
    }
  }
  return (
    <Card>
        <CardHeader className="space-y-3">
            <CardTitle className="text-[#2c3e50]  text-2xl font-bold">Create New Announcement</CardTitle>
            <CardDescription className="bg-[#e8f4fd] border-l-4 border-l-[#3498db] rounded p-4 ">
            Enter your text below and click &quot;Convert to Speech&quot; to create an announcement. After conversion, you can play it immediately or schedule it for later.
            </CardDescription>
          </CardHeader>
            <CardContent className="space-y-3">
                <Label className="text-[#333] font-normal text-md " htmlFor="announcement">Announcement Text:</Label>
                <Textarea onChange={(e)=>setText(e.target.value)} value={text} rows={5} required className="mb-6 focus-visible:ring-0 outline-[#4CAF50] w-full focus-visible:border rounded-lg focus-visible:border-[#4CAF50]" placeholder="Enter your announcement text here..." id="announcement "/>
                <Button disabled={loading} onClick={convertToSpeech} className="bg-[#4CAF50] rounded-md text-[16px] py-4 px-4 hover:-translate-y-0.5  transition-all duration-300 hover:bg-[#4CAF50]/85  text-white">Convert to speech</Button>
            </CardContent>
    </Card>
  )
}