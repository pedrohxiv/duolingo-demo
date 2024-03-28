"use client";

import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" alt="Mascot" height={40} width={40} />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Duolingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <Button
          variant={pathname === "/learn" ? "sidebarOutline" : "sidebar"}
          className="justify-start h-[52px]"
          asChild
        >
          <Link href="/learn">
            <Image
              src="/learn.svg"
              alt="Learn"
              height={32}
              width={32}
              className="mr-5"
            />
            Learn
          </Link>
        </Button>
        <Button
          variant={pathname === "/leaderboard" ? "sidebarOutline" : "sidebar"}
          className="justify-start h-[52px]"
          asChild
        >
          <Link href="/leaderboard">
            <Image
              src="/leaderboard.svg"
              alt="Leaderboard"
              height={32}
              width={32}
              className="mr-5"
            />
            Leaderboard
          </Link>
        </Button>
        <Button
          variant={pathname === "/quests" ? "sidebarOutline" : "sidebar"}
          className="justify-start h-[52px]"
          asChild
        >
          <Link href="/quests">
            <Image
              src="/quests.svg"
              alt="Quests"
              height={32}
              width={32}
              className="mr-5"
            />
            Quests
          </Link>
        </Button>
        <Button
          variant={pathname === "/shop" ? "sidebarOutline" : "sidebar"}
          className="justify-start h-[52px]"
          asChild
        >
          <Link href="/shop">
            <Image
              src="/shop.svg"
              alt="Shop"
              height={32}
              width={32}
              className="mr-5"
            />
            Shop
          </Link>
        </Button>
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
