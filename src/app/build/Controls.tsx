"use client";

import { Heading } from "@/components/Heading";
import Image from "next/image";
import clsx from "clsx";
import { ComponentProps, ReactNode, useEffect } from "react";
import { useCustomizerControls } from "./context";
import { useRouter } from "next/navigation";

import { CustomizerDeck, CustomizerMetal, CustomizerWheel } from "@/data/types";

type Props = {
  wheels: CustomizerWheel[];
  decks: CustomizerDeck[];
  metals: CustomizerMetal[];
  className?: string;
};

export default function Controls({ wheels, decks, metals, className }: Props) {
  const router = useRouter();

  const {
    setBolt,
    setDeck,
    setTruck,
    setWheel,
    selectedBolt,
    selectedDeck,
    selectedTruck,
    selectedWheel,
  } = useCustomizerControls();

  useEffect(() => {
    const url = new URL(window.location.href);

    if (selectedWheel?.uid)
      url.searchParams.set("wheel", selectedWheel.uid);
    if (selectedDeck?.uid)
      url.searchParams.set("deck", selectedDeck.uid);
    if (selectedTruck?.uid)
      url.searchParams.set("truck", selectedTruck.uid);
    if (selectedBolt?.uid)
      url.searchParams.set("bolt", selectedBolt.uid);

    router.replace(url.href);
  }, [router, selectedWheel, selectedDeck, selectedTruck, selectedBolt]);

  return (
    <div className={clsx("flex flex-col gap-6", className)}>
      <Options title="Deck" selectedName={selectedDeck?.uid}>
        {decks.map((deck) => (
          <Option
            key={deck.uid}
            imageField={deck.texture}
            selected={deck.uid === selectedDeck?.uid}
            onClick={() => setDeck(deck)}
          >
            {deck.uid?.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
      <Options title="Wheels" selectedName={selectedWheel?.uid}>
        {wheels.map((wheel) => (
          <Option
            key={wheel.uid}
            imageField={wheel.texture}
            selected={wheel.uid === selectedWheel?.uid}
            onClick={() => setWheel(wheel)}
          >
            {wheel.uid?.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
      <Options title="Trucks" selectedName={selectedTruck?.uid}>
        {metals.map((metal) => (
          <Option
            key={metal.uid}
            colorField={metal.color}
            selected={metal.uid === selectedTruck?.uid}
            onClick={() => setTruck(metal)}
          >
            {metal.uid?.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
      <Options title="Bolts" selectedName={selectedBolt?.uid}>
        {metals.map((metal) => (
          <Option
            key={metal.uid}
            colorField={metal.color}
            selected={metal.uid === selectedBolt?.uid}
            onClick={() => setBolt(metal)}
          >
            {metal.uid?.replace(/-/g, " ")}
          </Option>
        ))}
      </Options>
    </div>
  );
}

type OptionsProps = {
  title?: ReactNode;
  selectedName?: string;
  children?: ReactNode;
};

function Options({ title, selectedName, children }: OptionsProps) {
  const formattedName = selectedName?.replace(/-/g, " ");

  return (
    <div>
      <div className="flex">
        <Heading as="h2" size="xs" className="mb-2">
          {title}
        </Heading>
        <p className="ml-3 text-zinc-300">
          <span className="select-none text-zinc-500">| </span>
          {formattedName}
        </p>
      </div>
      <ul className="mb-1 flex flex-wrap gap-2">{children}</ul>
    </div>
  );
}

type OptionProps = Omit<ComponentProps<"button">, "children"> & {
  selected: boolean;
  children: ReactNode;
  onClick: () => void;
  imageField?: { url: string };
  colorField?: string;
};

function Option({
  children,
  selected,
  imageField,
  colorField,
  onClick,
}: OptionProps) {
  return (
    <li>
      <button
        className={clsx(
          "size-10 cursor-pointer rounded-full bg-black p-0.5 outline-2 outline-white",
          selected && "outline"
        )}
        onClick={onClick}
      >
        {imageField ? (
          <Image
            src={imageField.url}
            width={150}
            height={150}
            className="pointer-events-none h-full w-full rounded-full object-cover"
            alt=""
          />
        ) : (
          <div
            className="h-full w-full rounded-full"
            style={{ backgroundColor: colorField ?? undefined }}
          />
        )}

        <span className="sr-only">{children}</span>
      </button>
    </li>
  );
}
