'use client'
import AboutUs from "@/components/home/AboutUs";
import { HeroSlider } from "@/components/home/Breadcrumb";

import CeoMessage from "@/components/home/CeoMessage";
import MissionVision from "@/components/home/MissionVision";

import OurClients from "@/components/home/OurClients";
import OurNews from "@/components/home/OurNews";
import OurProjects from "@/components/home/OurProjects";
import OurServices from "@/components/home/OurServices";
import StartYourJourney from "@/components/home/StartYourJourney";
import Testimonials from "@/components/home/Testimonials";



export default function Home() {
  return (
    <>
    <HeroSlider/>
    <OurServices/>
    <AboutUs/>
    <OurProjects/>
    <MissionVision/>
    <StartYourJourney/>
    <OurClients/>
    <OurNews/>
    <Testimonials/>
    <CeoMessage/>
    </>
  );
}
