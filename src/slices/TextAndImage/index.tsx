import React from "react";
import clsx from "clsx";

import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading } from "@/components/Heading";
import { SlideIn } from "@/components/SlideIn";
import { ParallaxImage } from "./ParallaxImage";

declare module "react" {
  interface CSSProperties {
    "--index"?: number;
  }
}

export type TextAndImageProps = {
  theme: "Blue" | "Orange" | "Navy" | "Lime";
  heading: string;
  body: string;
  buttonText: string;
  buttonLink: string;
  foreground_image: { url: string };
  background_image: { url: string };
  variation?: "default" | "imageOnLeft";
  index?: number;
};

/**
 * Component for "TextAndImage" Slices.
 */
const TextAndImage = ({
  theme,
  heading,
  body,
  buttonText,
  buttonLink,
  foreground_image,
  background_image,
  variation,
  index = 0,
}: TextAndImageProps): React.JSX.Element => {
  return (
    <Bounded
      className={clsx(
        "sticky top-[calc(var(--index)*2rem)]",
        theme === "Blue" && "bg-texture bg-brand-blue text-white",
        theme === "Orange" && "bg-texture bg-brand-orange text-white",
        theme === "Navy" && "bg-texture bg-brand-navy text-white",
        theme === "Lime" && "bg-texture bg-brand-lime"
      )}
      style={{ "--index": index }}
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24">
        <div
          className={clsx(
            "flex flex-col items-center gap-8 text-center md:items-start md:text-left",
            variation === "imageOnLeft" && "md:order-2"
          )}
        >
          <SlideIn>
            <Heading size="lg" as="h2">
              {heading}
            </Heading>
          </SlideIn>
          <SlideIn>
            <div className="max-w-md text-lg leading-relaxed">
              <p>{body}</p>
            </div>
          </SlideIn>
          <SlideIn>
            <ButtonLink
              href={buttonLink}
              color={theme === "Lime" ? "orange" : "lime"}
            >
              {buttonText}
            </ButtonLink>
          </SlideIn>
        </div>

        <ParallaxImage
          foregroundImage={foreground_image}
          backgroundImage={background_image}
        />
      </div>
    </Bounded>
  );
};

export default TextAndImage;
