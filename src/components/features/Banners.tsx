"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import bannerItem from "@/public/images/ChatGPT Image Aug 15, 2026, 05_17_40 PM.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel";
import Image from "next/image";

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-auto h-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="text-amber-400 text-4xl">
            <Image src={bannerItem} alt={"Banner"} />1
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="text-amber-400 text-4xl">
            <Image src={bannerItem} alt={"Banner"} />2
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="text-amber-400 text-4xl">
            <Image src={bannerItem} alt={"Banner"} />3
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
