import { PageWrapper } from "@/components/page-wrapper";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NextLink from "next/link";

const experiments = [
  {
    title: "0xArtcade",
    description: "Play art-focused games, climb leadboards, and have fun",
    link: "https://0xartcade.xyz",
    target: "_blank",
  },
  {
    title: "Lines",
    description:
      "My first experiment in generative art and seeing what I could make",
    link: "/experiments/lines",
    target: "_self",
  },
];

export default async function Experiments() {
  return (
    <PageWrapper className="">
      <div className="flex flex-wrap gap-8">
        {experiments.map((item) => (
          <NextLink href={item.link} target={item.target} key={item.title}>
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
