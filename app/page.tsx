"use client";
import Approach from "@/components/Approach";
// import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100  flex justify-center items-center flex-col overflow-hidden mx-auto  sm:px-10 px-5 ">
      <div className=" max-w-7xl w-full">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Clients/> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
