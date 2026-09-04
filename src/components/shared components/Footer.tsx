import Link from "next/link";
import { Instagram, LinkedIn, Telegram } from "../icons/SocialMedia";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <footer className="w-full grid grid-flow-col justify-around bg-footer-bg p-10">
      <div className="grid-cols-4">
        <div className="hidden flex-col gap-1 md:flex">
          <span className="font-medium text-amber-950">Help</span>
          <span className="text-xs text-muted-foreground">Support & docs</span>
        </div>
      </div>
      <div className="grid-cols-8">
        <div className="flex items-center gap-2 text-sm md:gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-medium text-amber-950">Settings</span>
            <span className="text-xs text-muted-foreground">
              Manage preferences
            </span>
          </div>
          <Separator orientation="vertical" className="bg-muted-foreground" />
          <div className="flex flex-col gap-1">
            <span className="font-medium text-amber-950">tell</span>
            <span className="text-xs text-muted-foreground">
              Profile & security
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
    </footer>
  );
}
