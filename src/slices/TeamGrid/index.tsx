import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import React from "react";
import { Skater } from "./Skater";
import { SlideIn } from "@/components/SlideIn";

export type TeamGridProps = {
  heading: string;
  skaters: import("../../data/skaters").SkaterData[];
};

/**
 * Component for "TeamGrid" Slices.
 */
const TeamGrid = ({ heading, skaters }: TeamGridProps): React.JSX.Element => {
  return (
    <Bounded
      className="bg-texture bg-brand-navy"
    >
      <SlideIn>
        <Heading as="h2" size="lg" className="mb-8 text-center text-white">
          {heading}
        </Heading>
      </SlideIn>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {skaters.map((skater, index) => (
          <React.Fragment key={index}>
            {skater.first_name && (
              <SlideIn>
                <Skater index={index} skater={skater} />
              </SlideIn>
            )}
          </React.Fragment>
        ))}
      </div>
    </Bounded>
  );
};

export default TeamGrid;
