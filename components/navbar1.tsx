"use client";

import Link from "next/link";
import {
  BookOpen,
  BriefcaseBusiness,
  Calculator,
  ChevronRight,
  CodeXml,
  FileText,
  FlaskConical,
  GraduationCap,
  Laptop,
  Menu,
  PenSquare,
  ScrollText,
  Sigma,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  className?: string;
}

const menu: MenuItem[] = [
  {
    title: "Academic Services",
    url: "/services",
    items: [
      {
        title: "Math Homework Help",
        description:
          "Expert algebra, calculus, geometry, and statistics assignment support.",
        icon: <Calculator className="size-5" />,
        url: "/services/math-homework-help",
      },
      {
        title: "Essay Writing Services",
        description:
          "Custom college essays and academic writing assistance by experts.",
        icon: <PenSquare className="size-5" />,
        url: "/services/essay-writing-services",
      },
      {
        title: "Research Paper Writing",
        description:
          "Scholarly research papers, theses, and doctoral dissertations.",
        icon: <ScrollText className="size-5" />,
        url: "/services/research-paper-writing",
      },
      {
        title: "Online Class Help",
        description:
          "Full course support for Canvas, Blackboard, and weekly tasks.",
        icon: <Laptop className="size-5" />,
        url: "/services/online-class-help",
      },
      {
        title: "Statistics Homework Help",
        description:
          "Expert help with SPSS, regression, and data analysis assignments.",
        icon: <Sigma className="size-5" />,
        url: "/services/statistics-homework-help",
      },
      {
        title: "Programming Homework Help",
        description:
          "Coding assistance for Python, Java, C++, SQL, and CS projects.",
        icon: <CodeXml className="size-5" />,
        url: "/services/programming-homework-help",
      },
    ],
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "All Services",
    url: "/services",
  },
  {
    title: "Order Now",
    url: "/order-now",
  },
];

const Navbar1 = ({ className }: NavbarProps) => {
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-xl",
        className
      )}
    >
      <div className="container">
        {/* Desktop Navbar */}
        <nav className="hidden h-24 items-center justify-between lg:flex">
          {/* Left */}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-3"
            >
              
             <div className="flex flex-col">
  <span className="text-2xl font-black leading-[1.2] tracking-tight text-primary">
    Homework <span className="text-accent">Helpers</span> LA
  </span>
</div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
                       <Button
              asChild
              className="h-11 rounded-xl bg-accent px-6 font-bold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] hover:opacity-90"
            >
              <Link href="/order-now">Order Now</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <div className="flex h-16 items-center justify-between lg:hidden">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center gap-3">
           
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tight text-primary">
                Homework Helpers LA
              </span>

              <span className="text-[10px] uppercase tracking-[0.18em] text-accent">
                Academic Support
              </span>
            </div>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="outline"
                className="rounded-xl border-primary/20"
              >
                <Menu className="size-5 text-primary" />
              </Button>
            </SheetTrigger>

            <SheetContent className="w-full overflow-y-auto border-l border-border/50 bg-background sm:max-w-md">
              <SheetHeader className="border-b pb-5">
                <SheetTitle>
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                  >
                   
                    <div className="flex flex-col text-left leading-none">
                      <span className="text-lg font-black text-primary">
                        Homework Helpers LA
                      </span>

                                       </div>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-8">
                {/* Mobile Navigation */}
                <Accordion
                  type="single"
                  collapsible
                  className="space-y-3"
                >
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>

                {/* Mobile CTA */}
                <div className="flex flex-col gap-3 border-t pt-6">
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-xl border-primary/20 font-semibold text-primary"
                  >
                    <Link href="/login">Login</Link>
                  </Button>

                  <Button
                    asChild
                    className="h-12 rounded-xl bg-accent font-bold text-accent-foreground"
                  >
                    <Link href="/order-now">
                      Get Homework Help
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="h-10 rounded-xl bg-transparent px-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary">
          {item.title}
        </NavigationMenuTrigger>

        <NavigationMenuContent>
          <div className="grid w-[600px] grid-cols-2 gap-1 rounded-2xl border bg-popover p-2 shadow-2xl">
            {item.items.map((subItem) => (
              <NavigationMenuLink
                key={subItem.title}
                asChild
              >
                <SubMenuLink item={subItem} />
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        asChild
        className="inline-flex h-10 items-center rounded-xl px-4 text-sm font-semibold transition-colors hover:bg-secondary hover:text-primary"
      >
        <Link href={item.url}>{item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem
        key={item.title}
        value={item.title}
        className="rounded-2xl border bg-card px-4"
      >
        <AccordionTrigger className="py-5 text-base font-bold hover:no-underline">
          {item.title}
        </AccordionTrigger>

        <AccordionContent className="pb-4">
          <div className="space-y-2">
            {item.items.map((subItem) => (
              <SubMenuLink
                key={subItem.title}
                item={subItem}
                mobile
              />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      href={item.url}
      className="flex items-center justify-between rounded-2xl border bg-card px-4 py-5 text-base font-bold transition-colors hover:bg-secondary"
    >
      {item.title}

      <ChevronRight className="size-4 text-muted-foreground" />
    </Link>
  );
};

const SubMenuLink = ({
  item,
  mobile,
}: {
  item: MenuItem;
  mobile?: boolean;
}) => {
  return (
    <Link
      href={item.url}
      className={cn(
        "group flex gap-4 rounded-2xl transition-all duration-200",
        mobile
          ? "border border-border/50 p-4 hover:bg-secondary"
          : "p-4 hover:bg-secondary"
      )}
    >
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
        {item.icon}
      </div>

      <div>
        <div className="text-sm font-bold text-foreground transition-colors group-hover:text-primary">
          {item.title}
        </div>

        {item.description && (
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export { Navbar1 };