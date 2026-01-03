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
    <Container id="features" className=" py-10 md:py-20  ">
      <div className="flex  lg:flex-row  flex-col  lg:items-baseline-last justify-between gap-10 ">
        <Heading className="text-center lg:text-left md:text-center">
          Why brand choose us <br /> what we offer{" "}
        </Heading>

        <Subheading className="text-center lg:text-left darK:text-neutral-200 mx-auto lg:mx-0 hidden sm:block">
          From holistic brand systems to high-velocity deployment and
          enterprise-grade security—we build infrastructure that scales.
        </Subheading>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-4 my-10 md:my-20 mx-auto lg:mx-0 ">
        <Card className="rounded-tl-4xl rounded-bl-4xl">
          <CardSkeloton children={<SkeletonCard1 />} />
          <div className="px-4 md:px-6 py-6 md:py-12 flex items-center justify-between">
            <Cardtittle>Holistic Brand Systems</Cardtittle>
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
            <Cardtittle>Enterprise-Grade Security</Cardtittle>
            <CardPlus />
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default Features;
