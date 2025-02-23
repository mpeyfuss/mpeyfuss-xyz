import type { Metadata } from "next";
import { ReactNode } from "react";

import { resolveAbsoluteUrl } from "@/lib/urls";

import { Body } from "./body";

import "./globals.css";

// Set max cache to 1 hour. Individual routes can lower this.
// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
export const revalidate = 3600;

// Opt out of caching for all data requests in the route segment.
// Nextjs caches `fetch` calls by default, which we dont want.
// https://nextjs.org/docs/app/building-your-application/caching#opting-out-1
export const fetchCache = "default-no-store";

export const metadata: Metadata = {
  metadataBase: new URL(resolveAbsoluteUrl("")),
  title: {
    template: "%s // mpeyfuss.xyz",
    default: "Home // mpeyfuss.xyz",
  },
  description: "Creativity Unbound.",
  openGraph: {
    type: "website",
  },
  twitter: {
    // https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
    card: "summary_large_image",
    site: "@mpeyfuss",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <Body>{children}</Body>
  </html>
);

export default RootLayout;
