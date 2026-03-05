import { ButtonLink } from "@/components/ButtonLink";
import Image from "next/image";
import { SkaterScribble } from "./SkaterScribble";
import clsx from "clsx";
import { SkaterData } from "@/data/skaters";

type Props = {
  skater: SkaterData;
  index: number;
};

export function Skater({ skater, index }: Props) {
  const colors = [
    "text-brand-blue",
    "text-brand-lime",
    "text-brand-orange",
    "text-brand-pink",
    "text-brand-purple",
  ];

  const scribbleColor = colors[index];

  return (
    <div className="skater group relative flex flex-col items-center gap-4">
      <div className="stack-layout overflow-hidden">
        <Image
          src={skater.photo_background.url}
          width={500}
          height={600}
          alt=""
          className="scale-110 transform object-cover transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[.8]"
        />
        <SkaterScribble className={clsx("relative", scribbleColor)} />
        <Image
          src={skater.photo_foreground.url}
          width={500}
          height={600}
          alt=""
          className="transform object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />
        <div className="relative h-48 w-full place-self-end bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <h3 className="relative grid place-self-end justify-self-start p-2 font-sans text-brand-gray ~text-2xl/3xl">
          <span className="mb-[-.3em] block">{skater.first_name}</span>
          <span className="block">{skater.last_name}</span>
        </h3>
      </div>
      <ButtonLink href={skater.customizer_link} size="sm">
        Build their board
      </ButtonLink>
    </div>
  );
}
