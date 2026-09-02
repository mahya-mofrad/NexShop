import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <section className="w-full grid grid-flow-col justify-around bg-footer-bg p-10">
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
            <span className="font-medium text-amber-950">Account</span>
            <span className="text-xs text-muted-foreground">
              Profile & security
            </span>
          </div>
          <Separator
            orientation="vertical"
            className="hidden md:block bg-muted-foreground"
          />
          <div className="hidden flex-col gap-1 md:flex">
            <span className="font-medium text-amber-950">Help</span>
            <span className="text-xs text-muted-foreground">
              Support & docs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
