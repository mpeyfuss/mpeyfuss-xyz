import { PageWrapper } from "@/components/page-wrapper";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NextLink from "next/link";

const work = [
  {
    title: "Transient Labs",
    description: "Creator tooling unleashing creativity on the blockchain",
    link: "https://transient.xyz",
  },
  {
    title: "Transient Dot Fun",
    description: "Highlighting the ecosystem of fun blockchain tools",
    link: "https://transient.fun",
  },
  {
    title: "ERC-7160",
    description: "Multi-metadata standard extension for ERC-721",
    link: "https://eips.ethereum.org/EIPS/eip-7160",
  },
];

export default async function Work() {
  return (
    <PageWrapper className="">
      <div className="flex flex-wrap gap-8">
        {work.map((item) => (
          <NextLink href={item.link} target="_blank" key={item.title}>
            <Card>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          </NextLink>
        ))}
      </div>
    </PageWrapper>
  );
}
