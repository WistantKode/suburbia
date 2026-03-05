import React from "react";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { SkateboardProduct } from "./SkateboardProduct";
import { SlideIn } from "@/components/SlideIn";

/**
 * Props for `ProductGrid`.
 */
export type ProductGridProps = {
  heading: string;
  body: string;
  products: { id: string }[];
};

const ProductGrid = ({ heading, body, products }: ProductGridProps): React.JSX.Element => {
  return (
    <Bounded
      className="bg-texture bg-brand-gray"
    >
      <SlideIn>
        <Heading className="text-center ~mb-4/6" as="h2">
          {heading}
        </Heading>
      </SlideIn>
      <SlideIn>
        <div className="text-center ~mb-6/10">
          <p>{body}</p>
        </div>
      </SlideIn>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map(({ id }) => (
          <SkateboardProduct key={id} id={id} />
        ))}
      </div>
    </Bounded>
  );
};

export default ProductGrid;
