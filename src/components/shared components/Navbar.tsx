"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { components } from "@/src/app/data/Navbar";
import { primitives } from "@/src/app/data/Navbar";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu";

import Logo from "../../../public/nexShopLOGO.png";
import { ModeToggle } from "../features/moodToggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full py-2">
      <div className="flex-shrink-0 w-10 pr-4">
        <ModeToggle />
      </div>

      {/* menu */}
      <NavigationMenu>
        <NavigationMenuList className="flex items-center justify-center gap-2">
          <NavigationMenuItem>
            <NavigationMenuTrigger>دسته بندی محصولات</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                {primitives.map((primitive) => (
                  <ListItem
                    key={primitive.title}
                    title={primitive.title}
                    href={primitive.href}
                  >
                    {primitive.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger>برندها</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              render={<Link href="/about">درباره ما</Link>}
            />
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              render={<Link href="/contact">تماس با ما</Link>}
            />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* logo */}
      <div className="flex-shrink-0">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="NexShop Logo" className="h-14 w-auto" />
        </Link>
      </div>
    </nav>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  );
}
