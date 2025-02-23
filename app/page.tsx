import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { Paragraph, Title } from "@/components/ui/typography";
import Image from "next/image";
import NextLink from "next/link";

export default async function Home() {
  return (
    <PageWrapper className="gap-y-10 md:mt-20 text-center">
      <div className="md:max-w-3xl flex flex-col gap-y-10 md:flex-row md:gap-x-10 items-center justify-center">
        <Image
          src="/pfp.png"
          alt="profile picture"
          width={400}
          height={400}
          className="rounded w-full md:w-1/2"
        />
        <Title>creativity unbound</Title>
      </div>
      <Paragraph>
        I&apos;m Marco. I believe that blockchains, and Ethereum in particular,
        unlock creativity in a way that we haven&apos;t seen in a long time. As
        such, I believe in the present & future where creativity is unbound.
      </Paragraph>
      <div className="flex gap-x-4 mt-8">
        <NextLink href="/work">
          <Button variant="outline">My work</Button>
        </NextLink>
        <NextLink href="/experiments">
          <Button>The good stuff</Button>
        </NextLink>
      </div>
    </PageWrapper>
  );
}
