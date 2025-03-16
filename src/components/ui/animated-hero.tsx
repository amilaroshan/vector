import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShowcaseImage } from "./showcase-image";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Sales", "HR", "Finance"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 pb-0 lg:pt-40 pb-o items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-5xl tracking-tighter text-center font-medium font-space-grotesk">
              <span>Onboard a digital workforce for</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold font-poly text-accent tracking-normal"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title} <span className="font-medium font-space-grotesk text-gray-800 tracking-tighter">Teams</span>
                  </motion.span>
                ))}
                
              </span>
             
            </h1>
            

            <p className="text-lg md:text-xl leading-relaxed m-auto text-muted-foreground max-w-2xl text-center">
            Recruit digital workers that drive human results grounded in your 
            company's knowledge and workflows.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4" variant="default">
            Book an intro
            </Button>
            <Button size="lg" className="gap-4" variant="outline">
            Try it free
            </Button>
          </div>
          <ShowcaseImage 
        imageSrc="/main-img.svg" 
        alt="Vector platform interface" 
        caption="See how our digital workforce transforms your business"
      />
        </div>
       
      </div>
    </div>
  );
}

export { Hero };
