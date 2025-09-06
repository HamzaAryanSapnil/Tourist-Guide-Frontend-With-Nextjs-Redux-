import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { whyChooseUs } from "@/constants";
export default function WhyChooseUs() {
  return (
    <section className="mt-32 flex flex-col justify-start items-start gap-y-10">
      <div className="flex flex-col justify-start items-start gap-y-3 ">
        <h1 className="font-bold text-4xl">Why Choose Us</h1>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-6 w-full h-full">
        {whyChooseUs.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card
              key={index}
              className={`text-center hover:shadow-lg transition-shadow duration-300 ${item.mxAuto ? "mx-auto" : ""} ${item.bg? item.bg : ""}  w-full h-full lg:max-w-96 xl:max-w-xl `}
            >
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
