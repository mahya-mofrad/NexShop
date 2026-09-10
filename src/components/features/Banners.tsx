"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import bannerItem1 from "@/public/images/banner.png";
import bannerItem2 from "@/public/images/ChatGPT Image Aug 15, 2026, 05_17_40 PM.png";
import bannerItem3 from "@/public/images/nexShopLOGO.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel";
import Image from "next/image";

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnMouseEnter: true }),
  );

  return (
    <Carousel
      dir="rtl"
      opts={{
        loop: true,
        direction: "rtl",
      }}
      plugins={[plugin.current]}
      className="w-screen"
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="relative min-w-screen h-[43.333vh] overflow-hidden">
              <Image
                src={
                  index === 0
                    ? bannerItem3
                    : index === 1
                      ? bannerItem2
                      : bannerItem1
                }
                alt={`Banner ${index + 1}`}
                sizes="100vw"
                className="object-cover"
                fill
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
