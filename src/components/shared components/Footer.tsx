import Link from "next/link";
import { Instagram, LinkedIn, Telegram } from "../icons/SocialMedia";
import { Separator } from "../ui/separator";
import { Gift, Phone, Tag, Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full grid grid-flow-col justify-around items-center bg-footer-bg p-10">
      <div className="grid-cols-4">
        <div className="flex items-center gap-2 text-sm md:gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-medium text-amber-950">tel</span>
            <span className="text-xs text-icon-color">
              <Link
                href="tel:+989359672115"
                target="_blank"
                className="flex items-center gap-1"
              >
                <bdi>09359672115</bdi>
                <Phone className="w-4 h-4" />
              </Link>
            </span>
          </div>
          <Separator
            orientation="vertical"
            className="hidden md:block bg-muted-foreground"
          />
          <div className="hidden flex-col gap-1 md:flex">
            <span className="font-medium text-amber-950">Social Media</span>
            <span className="flex gap-3 text-xs text-icon-color">
              <Link
                href="https://www.linkedin.com/in/mahya-mofrad"
                target="_blank"
              >
                <LinkedIn className="w-4 h-4" />
              </Link>
              <Link href="https://t.me/mahya_shm" target="_blank">
                <Telegram className="w-4 h-4" />
              </Link>
              <Link href="https://www.instagram.com/mhya_shm" target="_blank">
                <Instagram className="w-4 h-4" />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="grid-cols-8">
        <div className="flex items-center gap-2 text-sm md:gap-4">
          <div className="hidden flex-col items-center gap-1 md:flex">
            <span className="text-icon-color rotate-90">
              <Tag className="size-12 stroke-1" />
            </span>
            <span className="flex gap-3 text-xs text-icon-color">
              تخفیف ویژه
            </span>
          </div>
          <Separator orientation="vertical" className="bg-muted-foreground" />
          <div className="hidden flex-col items-center gap-1 md:flex">
            <span className="text-icon-color">
              <Gift className="size-12 stroke-1" />
            </span>
            <span className="flex gap-3 text-xs text-icon-color">
              هدیه تولد
            </span>
          </div>
          <Separator
            orientation="vertical"
            className="hidden md:block bg-muted-foreground"
          />
          <div className="hidden flex-col items-center gap-1 md:flex">
            <span className="text-icon-color">
              <Truck className="size-12 stroke-1" />
            </span>
            <span className="flex gap-3 text-xs text-icon-color">
              ارسال رایگان
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
