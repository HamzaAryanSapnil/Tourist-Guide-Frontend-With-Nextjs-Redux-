import FeaturedDestination from "@/components/modules/home/FeaturedDestination";
import WhyChooseUs from "@/components/modules/home/WhyChooseUs";
import Homepage from "@/pages/Home/Homepage";


export default function Home() {
  return (
   <div>
     <Homepage/>
     <div className="container mx-auto my-10 space-y-10 px-4 md:px-6" >
      <FeaturedDestination/>
      <WhyChooseUs/>
     </div>
   </div>
  );
}
