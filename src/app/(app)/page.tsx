import Deals from "@/components/modules/home/Deals";
import FeaturedDestination from "@/components/modules/home/FeaturedDestination";
import Newsletter from "@/components/modules/home/Newsletter";
import StatsSection from "@/components/modules/home/StatsSection";
import VideoSection from "@/components/modules/home/VideoSection";
import WhyChooseUs from "@/components/modules/home/WhyChooseUs";
import Homepage from "@/pages/Home/Homepage";


export default function Home() {
  return (
   <div>
     <Homepage/>
     <div className="container mx-auto my-10 space-y-10 px-4 md:px-6" >
      <FeaturedDestination/>
      <WhyChooseUs/>
      <StatsSection/>
      <Deals/>
      <VideoSection/>
      <Newsletter/>

     </div>
   </div>
  );
}
