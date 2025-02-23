import { PageWrapper } from "@/components/page-wrapper";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NextLink from "next/link";

const posts = [
  {
    title: "Introducing ERC-7160",
    description: "Multi-metadata NFTs extending the ERC-721 standard",
    link: "https://mirror.xyz/0x74A7b842FDeb244C152aa5BC8B7fbae362091EE1/_I0EuGSzYXZ13QrmNd831pd9sx9fVZRmr96QbL6cgOI",
  },
  {
    title: "NFT Storage Wars",
    description: "IPFS vs Arweave and what I think the future holds",
    link: "https://x.com/compose/articles/edit/1818386770347630593",
  },
];

export default async () => {
  return (
    <PageWrapper className="">
      <div className="flex flex-wrap gap-8">
        {posts.map((item) => (
          <NextLink href={item.link} target="_blank">
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
};
