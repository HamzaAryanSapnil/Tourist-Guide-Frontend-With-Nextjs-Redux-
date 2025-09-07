// app/(routes)/tours/page.tsx  (example path)

import TourHero from "@/components/modules/tours/tourHero";
import TourCard from "@/components/modules/tours/ToursCards";
import ToursSidebar from "@/components/modules/tours/TourSidebar";
import ToursSearchFilter from "@/components/modules/tours/ToursSearchFilter";


export default function Tours() {
  return (
    <section className=" w-full h-full" >
      <TourHero />

      <div className="container mx-auto px-4 lg:px-6 my-10">
        {/* Filter */}
        <ToursSearchFilter />

        {/* Main grid: left -> cards, right -> sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          {/* LEFT: main content */}
          <main className="lg:col-span-3">
            <TourCard />
          </main>

          {/* RIGHT: sidebar — IMPORTANT: keep it inside this column */}
          <aside className="lg:col-span-1">
            {/* wrapper that provides sticky behaviour constrained to the column */}
            <div className="hidden lg:block sticky top-24 self-start">
              <ToursSidebar />
            </div>
            {/* On mobile we can render the sidebar content below the cards if you want */}
            <div className="block lg:hidden mt-8">
              <ToursSidebar mobile />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
