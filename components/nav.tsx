import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

import { Link } from "@/components/ui/typography";

export const Navigation = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <NavigationMenu className="">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
                HOME
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/work" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
                WORK
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/experiments" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
                EXPERIMENTS
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle())}>
                BLOG
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      {/* <div className="md:hidden w-full flex justify-between px-8 py-2 items-center">
        <Title className="text-xl">mpeyfuss.xyz</Title>
        <Drawer>
          <DrawerTrigger className="border border-foreground p-2 rounded">
            <MenuIcon className="stroke-foreground" />
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex flex-col items-center gap-y-4 my-8">
              <Link href="/" className="text-2xl">
                HOME
              </Link>
              <Link href="/work" className="text-2xl">
                WORK
              </Link>
              <Link href="/experiments" className="text-2xl">
                EXPERIMENTS
              </Link>
              <Link href="/blog" className="text-2xl">
                BLOG
              </Link>
            </div>
          </DrawerContent>
        </Drawer>
      </div> */}
    </div>
  );
};
