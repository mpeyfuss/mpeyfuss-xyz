import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { Paragraph, Title } from "@/components/ui/typography";
import Image from "next/image";
import NextLink from "next/link";

export default async function Lines() {
  return (
    <PageWrapper className="gap-y-10 md:mt-10 mb-20 text-center">
      <Image
        src="/lines/pfp.png"
        width="500"
        height="500"
        alt="lines pfp"
        className="border border-foreground rounded object-cover aspect-video"
      />
      <Title>Lines</Title>
      <Paragraph className="w-full">
        Lines is an exploration of emotion and human connection through
        generative lines.
      </Paragraph>
      <Paragraph>
        Using generative art techniques, I was able to create different types of
        lines that resemble &apos;pen and ink&apos; techniques that are
        traditionally made with various writing instruments.
      </Paragraph>
      <Paragraph>
        While the project started off as an exploration of metaphysical
        &apos;pen and ink&apos;, the true purpose is to explore emotion and
        human connection in a post-physical world with these lines.
      </Paragraph>
      <Paragraph>
        Each line created in this collection was created on a call with the
        recipient of the line, forever linking us.
      </Paragraph>
      <NextLink href="https://opensea.io/collection/sp-lines" target="_blank">
        <Button>View Collection</Button>
      </NextLink>
    </PageWrapper>
  );
}
