import { Metadata } from "next";

import { homepageData } from "@/data/homepage";
import { settings } from "@/data/settings";
import { components } from "@/slices";
import { skatersData } from "@/data/skaters";

type SliceBase = {
  id: string;
  slice_type: string;
  variation?: string;
  primary: Record<string, unknown>;
  slices?: SliceBase[];
};

type TextAndImageBundle = {
  id: string;
  slice_type: "text_and_image_bundle";
  slices: SliceBase[];
};

type HomepageSlice = SliceBase | TextAndImageBundle;

function mapSliceToProps(slice: SliceBase, index: number): Record<string, unknown> {
  const p = slice.primary;
  switch (slice.slice_type) {
    case "hero":
      return {
        heading: (p.heading as { text: string }[])?.[0]?.text || "",
        body: (p.body as { text: string }[])?.[0]?.text || "",
        buttonText: (p.button as { text: string })?.text || "",
        buttonLink: (p.button as { url: string })?.url || "/",
        skateboard_deck_texture: p.skateboard_deck_texture,
        skateboard_wheel_texture: p.skateboard_wheel_texture,
        skateboard_truck_color: p.skateboard_truck_color,
        skateboard_bolt_color: p.skateboard_bolt_color,
      };
    case "product_grid":
      return {
        heading: (p.heading as { text: string }[])?.[0]?.text || "",
        body: (p.body as { text: string }[])?.[0]?.text || "",
        products: (p.product as { skateboard?: { id: string } }[])?.map((item) => ({
          id: item.skateboard?.id || "",
        })) || [],
      };
    case "text_and_image":
      return {
        theme: p.theme,
        heading: (p.heading as { text: string }[])?.[0]?.text || "",
        body: (p.body as { text: string }[])?.[0]?.text || "",
        buttonText: (p.button as { text: string })?.text || "",
        buttonLink: (p.button as { url: string })?.url || "/",
        foreground_image: p.foreground_image,
        background_image: p.background_image,
        variation: slice.variation,
        index,
      };
    case "video_block":
      return {
        youtube_video_id: p.youtube_video_id || "",
      };
    case "team_grid":
      return {
        heading: (p.heading as { text: string }[])?.[0]?.text || "",
        skaters: skatersData,
      };
    default:
      return {};
  }
}

export default function Page() {
  const rawSlices = homepageData.slices as unknown as SliceBase[];
  const slices = bundleTextAndImageSlices(rawSlices);

  return (
    <>
      {slices.map((slice: HomepageSlice, index: number) => {
        if (slice.slice_type === "text_and_image_bundle") {
          return (
            <div key={slice.id}>
              {slice.slices?.map((subSlice: SliceBase, subIndex: number) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const Component = components[subSlice.slice_type as keyof typeof components] as any;
                return Component ? <Component key={subSlice.id} {...mapSliceToProps(subSlice, subIndex)} /> : null;
              })}
            </div>
          );
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const Component = components[slice.slice_type as keyof typeof components] as any;
        return Component ? <Component key={slice.id} {...mapSliceToProps(slice as SliceBase, index)} /> : null;
      })}
    </>
  );
}

export function generateMetadata(): Metadata {
  return {
    title: homepageData.meta_title ?? settings.site_title,
    description: homepageData.meta_description ?? settings.meta_description,
  };
}

function bundleTextAndImageSlices(slices: SliceBase[]): HomepageSlice[] {
  const res: HomepageSlice[] = [];

  for (const slice of slices) {
    if (slice.slice_type !== "text_and_image") {
      res.push(slice);
      continue;
    }

    const bundle = res.at(-1);
    if (bundle?.slice_type === "text_and_image_bundle") {
      bundle.slices?.push(slice);
    } else {
      res.push({
        id: `${slice.id}-bundle`,
        slice_type: "text_and_image_bundle",
        slices: [slice],
      });
    }
  }
  return res;
}

