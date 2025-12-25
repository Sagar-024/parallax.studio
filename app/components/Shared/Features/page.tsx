import React from "react";
import { Heading } from "../Hero/Heading";
import { Subheading } from "../Hero/Subheading";
import Container from "../Container";
import { Card, Cardtittle, CardPlus, CardSkeloton } from "./card";
import { SkeletonCard1 } from "./Skeleton/Skeleton1";
import { SkeletonCard2 } from "./Skeleton/Skeleton2";
import { SkeletonCard3 } from "./Skeleton/Skeleton3";

export const Features = () => {
  return (
    <Container className=" py-10 md:py-20 lg:py-47">
      <div className="flex flex-col  md:items-start ">
        <Heading className="text-center md:text-left ">
          We Are Parallax. <br className="hidden md:block" /> Crafted for
          Impact.{" "}
        </Heading>

        <Subheading className="text-center md:text-left mt-10 text-neutral-400 text-lg md:text-xl darK:text-neutral-200">
          We build digital products that define categories. Surgical precision,
          cinematic motion, and engineering that scales.
        </Subheading>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-10 md:my-20">
          <Card className="rounded-tl-4xl rounded-bl-4xl">
            <CardSkeloton children={<SkeletonCard1 />} />
            <div className="px-4 md:px-6 py-6 md:py-12 flex items-center justify-between">
              <Cardtittle>Bespoke Design, No Templates</Cardtittle>
              <CardPlus />
            </div>
          </Card>
          <Card>
            <CardSkeloton children={<SkeletonCard2 />} />
            <div className="px-4 md:px-6 py-6 md:py-12  flex items-center justify-between">
              <Cardtittle>Cinematic Motion & Interaction</Cardtittle>
              <CardPlus />
            </div>
          </Card>
          <Card className="rounded-tr-4xl rounded-br-4xl">
            <CardSkeloton children={<SkeletonCard3 />} />

            <div className="px-4 md:px-6 py-6 md:py-12 flex items-center justify-between">
              <Cardtittle>Surgical Engineering Scale</Cardtittle>
              <CardPlus />
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Features;
