"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import bannerItem1 from "@/public/images/ChatGPT Image Sep 12, 2026, 11_28_06 PM.png";
import bannerItem2 from "@/public/images/ChatGPT Image Sep 12, 2026, 10_45_25 PM.png";
import bannerItem3 from "@/public/images/ChatGPT Image Sep 11, 2026, 10_07_35 PM.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/src/components/ui/carousel";
import Image from "next/image";

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnMouseEnter: true }),
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
            <div className="relative min-w-screen h-[90vh] overflow-hidden">
              <Image
                src={
                  index === 0
                    ? bannerItem1
                    : index === 1
                      ? bannerItem2
                      : bannerItem3
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
