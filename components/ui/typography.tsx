import { ReactNode } from "react";
import NextLink, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

export const Title = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-title font-bold tracking-tight lg:text-5xl uppercase",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="scroll-m-20 text-3xl tracking-tight mt-10 font-title">
      {children}
    </h2>
  );
};

export const SubHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="scroll-m-20 text-lg font-semibold tracking-tight mt-5 ">
      {children}
    </h3>
  );
};

export const SubHeading2 = ({ children }: { children: ReactNode }) => {
  return (
    <h4 className="scroll-m-20 text-lg  font-semibold tracking-tight">
      {children}
    </h4>
  );
};

export const Paragraph = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <p className={cn("[&:not(:first-child)]:mt-2", className)}>{children}</p>
  );
};

interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

export const Link = ({
  children,
  className,
  ...linkProps
}: CustomLinkProps) => {
  return (
    <NextLink
      {...linkProps}
      className={cn("text-link hover:text-link/60", className)}
    >
      {children}
    </NextLink>
  );
};
