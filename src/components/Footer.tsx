import Image from "next/image";
import Link from "next/link";
import React from "react";

import { settings } from "@/data/settings";
import { Logo } from "@/components/Logo";
import { Bounded } from "./Bounded";
import { FooterPhysics } from "./FooterPhysics";

export function Footer() {
  const boardTextureURLs = settings.footer_skateboards
    .map((item: { skateboard: { url: string } }) => item.skateboard.url)
    .filter((url: string | undefined): url is string => Boolean(url));

  return (
    <footer className="bg-texture bg-zinc-900 text-white overflow-hidden">
      <div className="relative h-[75vh] ~p-10/16 md:aspect-auto">
        <Image
          src={settings.footer_image.url}
          alt=""
          fill
          className="object-cover"
        />
        <FooterPhysics
          boardTextureURLs={boardTextureURLs}
          className="absolute inset-0 overflow-hidden"
        />
        <Logo className="pointer-events-none relative h-20 mix-blend-exclusion md:h-28" />
      </div>
      <Bounded as="nav">
        <ul className="flex flex-wrap justify-center gap-8 ~text-lg/xl">
          {settings.navigation.map((item: import("../data/types").SettingsNavigationItem) => (
            <li key={item.link.text} className="hover:underline">
              <Link href={item.link.url || "/"}>{item.link.text}</Link>
            </li>
          ))}
        </ul>
      </Bounded>
      {/* List of links */}
    </footer>
  );
}
