import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const PageWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div className="w-full flex flex-row justify-center mt-10 px-8">
      <div
        className={cn("w-full max-w-4xl flex flex-col items-center", className)}
      >
        {children}
      </div>
    </div>
  );
};
