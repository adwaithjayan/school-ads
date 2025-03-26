import TabSection from "@/components/tabSection";





export default function Home() {
  return (
    <>
    <section className="max-w-[900px]  p-5 min-h-screen text-[#333] mx-auto">
      <h2 className="text-center max-md:text-2xl border-b-[#4caf50] text-[#2c3e50] font-bold border-b-2 text-4xl pb-2.5 my-12 ">School Announcement System</h2>

        <TabSection/>
      
      
    </section>
    <footer className="text-center text-[#777] mt-10 py-5  border-t border-[#ddd] text-sm"> 
      ESP32 School Announcement System &copy; 2025
      </footer>
    </>
  );
}


