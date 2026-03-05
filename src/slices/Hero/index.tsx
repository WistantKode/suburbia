import React from "react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { ButtonLink } from "@/components/ButtonLink";
import { WideLogo } from "./WideLogo";
import { TallLogo } from "./TallLogo";
import { InteractiveSkateboard } from "./InteractiveSkateboard";

const DEFAULT_DECK_TEXTURE = "/skateboard/Deck.webp";
const DEFAULT_WHEEL_TEXTURE = "/skateboard/SkateWheel1.png";
const DEFAULT_TRUCK_COLOR = "#6F6E6A";
const DEFAULT_BOLT_COLOR = "#6F6E6A";

export type HeroProps = {
  heading: string;
  body: string;
  buttonText: string;
  buttonLink: string;
  skateboard_deck_texture?: { url: string };
  skateboard_wheel_texture?: { url: string };
  skateboard_truck_color?: string;
  skateboard_bolt_color?: string;
};

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ 
  heading,
  body,
  buttonText,
  buttonLink,
  skateboard_deck_texture,
  skateboard_wheel_texture,
  skateboard_truck_color,
  skateboard_bolt_color 
}: HeroProps): React.JSX.Element => {
  const deckTextureURL =
    skateboard_deck_texture?.url || DEFAULT_DECK_TEXTURE;
  const wheelTextureURL =
    skateboard_wheel_texture?.url || DEFAULT_WHEEL_TEXTURE;
  const truckColor =
    skateboard_truck_color || DEFAULT_TRUCK_COLOR;
  const boltColor = skateboard_bolt_color || DEFAULT_BOLT_COLOR;

  return (
    <Bounded
      className="bg-brand-pink relative h-dvh overflow-hidden text-zinc-800 bg-texture"
    >
      <div className="absolute inset-0 flex items-center pt-20">
        <WideLogo className="w-full text-brand-purple hidden opacity-20 mix-blend-multiply lg:block" />
        <TallLogo className="w-full text-brand-purple opacity-20 mix-blend-multiply lg:hidden" />
      </div>

      <div className="absolute inset-0 mx-auto mt-24 grid max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16">
        <Heading className="relative max-w-2xl place-self-start">
          {heading}
        </Heading>
        <div className="flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row">
          <div className="max-w-[45ch] font-semibold ~text-lg/xl">
            <p>{body}</p>
          </div>
          <ButtonLink
            href={buttonLink}
            icon="skateboard"
            size="lg"
            className="z-20 mt-2 block"
          >
            {buttonText}
          </ButtonLink>
        </div>
      </div>

      <InteractiveSkateboard
        deckTextureURL={deckTextureURL}
        wheelTextureURL={wheelTextureURL}
        truckColor={truckColor}
        boltColor={boltColor}
      />
    </Bounded>
  );
};

export default Hero;
