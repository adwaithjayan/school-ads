import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Schedule({ setTabValue }:{setTabValue:(value:string )=>void}) {
  return (
    <Card>
        <CardHeader className="space-y-3">
            <CardTitle className="text-[#2c3e50]  text-2xl font-bold">Schedule Manager</CardTitle>
            <CardDescription className="bg-[#e8f4fd] border-l-4 border-l-[#3498db] flex flex-col space-y-5 rounded p-4 pt-6 pb-5">
               <p>You need to create an announcement first before you can schedule it.</p>
               <div className="flex-none">
               <Button onClick={()=>setTabValue("create")} className="bg-[#4CAF50] rounded-md text-[14px] font-normal py-4 px-4 hover:-translate-y-0.5  transition-all duration-300 hover:bg-[#4CAF50]/85  text-white">Create Announcement</Button>
               </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-[#2c3e50] mb-3  text-xl font-semibold tracking-tight">Scheduled Announcements</CardTitle>
            <p className="text-[#737373] text-sm ">No announcements scheduled yet.</p>
          </CardContent>
    </Card>
  )
}