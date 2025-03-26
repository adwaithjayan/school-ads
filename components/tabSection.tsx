"use client"

import { useState } from "react";

import Create from "@/components/Create";
import Schedule from "@/components/Schedule";
import Settings from "@/components/settings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



export default function TabSection() {
    const [tabValue,setTabValue] = useState("create");
  return (
    <Tabs value={tabValue} onValueChange={setTabValue} defaultValue="settings" className="max-w-[900px] grid">
          <TabsList className="flex bg-[#e7e7e7] h-max  justify-center space-x-2 items-center " >
            <TabsTrigger  value="create" className=" p-3 font-semibold">Create Announcement</TabsTrigger>
            <TabsTrigger value="schedule" className=" p-3 font-semibold">Schedule Manager</TabsTrigger>
            <TabsTrigger value="settings"  className=" p-3 font-semibold">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="create">
            <Create />
          </TabsContent>
          <TabsContent value="schedule" >
            <Schedule  setTabValue={setTabValue}/>
          </TabsContent>
          <TabsContent value="settings" >
            <Settings/>
          </TabsContent>
      </Tabs>
  )
}