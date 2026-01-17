import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { navigationLinks } from '@/data/navigation';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronRight, ChevronDown } from 'lucide-react';

interface NavItem {
    title: string;
    href: string;
    external?: boolean;
    children?: NavItem[];
}

export default function Header({ links }: { links?: NavItem[] }) {
    const displayLinks = links || navigationLinks;
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.position = 'unset';
            document.body.style.width = 'unset';
        }
    }, [isOpen]);

    return (
        <header
            className={cn(
                "sticky top-0 left-0 w-full z-[120] transition-all duration-300",
                scrolled
                    ? "bg-primary shadow-lg py-2"
                    : "bg-primary py-2"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="relative z-[120] flex items-center group">
                    <img
                        src="/Logo-Interrogante-white2.svg"
                        alt="Interrogante Spettacolo"
                        className="h-[40px] w-auto object-contain"
                    />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex ml-auto items-center gap-1 font-normal">
                    {displayLinks.map((link) => (
                        <NavigationMenu key={link.title}>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    {link.children ? (
                                        <>
                                            <NavigationMenuTrigger
                                                onClick={() => {
                                                    if (link.href && link.href !== "#") {
                                                        window.location.href = link.href;
                                                    }
                                                }}
                                                className="!bg-transparent text-white hover:text-secondary transition-colors !font-nav text-[18px] font-normal tracking-normal uppercase px-2 cursor-pointer"
                                            >
                                                {link.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="flex flex-col min-w-[200px] w-max gap-0 p-0 bg-primary border border-white/10 shadow-2xl overflow-visible">
                                                    {link.children.map((child: NavItem) => (
                                                        <li key={child.title} className="relative group/sub border-b border-white/5 last:border-0 w-full overflow-visible">
                                                            {child.children ? (
                                                                <div className="overflow-visible">
                                                                    <div
                                                                        className="flex items-center justify-between w-full select-none p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-white cursor-pointer gap-4"
                                                                    >
                                                                        <div className="text-[17px] font-normal leading-none uppercase tracking-normal font-nav text-white">
                                                                            {child.title}
                                                                        </div>
                                                                        <ChevronRight className="w-4 h-4 text-white/50 group-hover/sub:text-white shrink-0" />
                                                                    </div>
                                                                    {/* Nested Flyout - Using absolute positioning outside the container */}
                                                                    <div className="absolute left-[100%] top-0 hidden group-hover/sub:block min-w-[180px] w-max bg-primary border border-white/10 shadow-2xl z-[200]">
                                                                        <ul className="flex flex-col gap-0 p-0">
                                                                            {child.children.map((subChild: NavItem) => (
                                                                                <li key={subChild.title} className="border-b border-white/5 last:border-0 hover:bg-secondary">
                                                                                    <a
                                                                                        href={subChild.href}
                                                                                        target={subChild.external ? "_blank" : undefined}
                                                                                        rel={subChild.external ? "noopener noreferrer" : undefined}
                                                                                        className="block select-none p-3 leading-none no-underline outline-none text-white text-[15px] uppercase tracking-normal font-nav whitespace-nowrap"
                                                                                    >
                                                                                        {subChild.title}
                                                                                    </a>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <NavigationMenuLink asChild>
                                                                    <a
                                                                        href={child.href}
                                                                        target={child.external ? "_blank" : undefined}
                                                                        rel={child.external ? "noopener noreferrer" : undefined}
                                                                        className="block select-none p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-white whitespace-nowrap"
                                                                    >
                                                                        <div className="text-[17px] font-normal leading-none uppercase tracking-normal font-nav text-white">
                                                                            {child.title}
                                                                        </div>
                                                                    </a>
                                                                </NavigationMenuLink>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <NavigationMenuLink
                                            href={link.href}
                                            className="text-white hover:text-secondary transition-colors font-nav text-[18px] font-normal tracking-normal uppercase px-2 py-2 block"
                                        >
                                            {link.title}
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuItem>
                            </NavigationMenuList>
                            <div className="absolute left-0 top-full mt-2">
                                <NavigationMenuViewport className="!bg-primary border-none shadow-2xl text-white origin-top-left h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] !overflow-visible rounded-md transition-[width,_height] duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 font-normal" />
                            </div>
                        </NavigationMenu>
                    ))}

                    <div className="flex items-center gap-1 ml-4 border-l border-white/20 pl-4">
                        <a
                            href="#"
                            className="flex items-center gap-2 px-2 py-1 text-white hover:text-secondary transition-colors font-nav text-[18px] uppercase font-normal opacity-50 grayscale hover:opacity-100 hover:grayscale-0"
                            title="Italiano (Proximamente)"
                        >
                            <div className="w-6 h-4 flex overflow-hidden rounded-[1px] shadow-sm">
                                <div className="w-1/3 h-full bg-[#009246]"></div>
                                <div className="w-1/3 h-full bg-white"></div>
                                <div className="w-1/3 h-full bg-[#ce2b37]"></div>
                            </div>
                            <span className="leading-none">IT</span>
                        </a>
                        <a
                            href="/"
                            className="flex items-center gap-2 px-2 py-1 text-white hover:text-secondary transition-colors font-nav text-[18px] uppercase font-normal"
                            title="Español"
                        >
                            <div className="w-6 h-4 flex flex-col overflow-hidden rounded-[1px] shadow-sm">
                                <div className="h-1/4 bg-[#aa151b]"></div>
                                <div className="h-2/4 bg-[#f1bf00]"></div>
                                <div className="h-1/4 bg-[#aa151b]"></div>
                            </div>
                            <span className="leading-none">ES</span>
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-[130] w-10 h-10 flex flex-col items-end justify-center gap-1.5 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="w-8 h-[1px] bg-white block"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -2, width: "32px" } : { rotate: 0, y: 0, width: "20px" }}
                            className="h-[1px] bg-white block"
                        />
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 h-[100vh] w-full bg-primary z-[110] lg:hidden"
                        >
                            <div className="flex flex-col h-full pt-28 px-2 overflow-y-auto pb-10">
                                <nav className="flex flex-col gap-6">
                                    {displayLinks.map((link, i) => (
                                        <motion.div
                                            key={link.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 + i * 0.05 }}
                                            className="w-full"
                                        >
                                            {link.children ? (
                                                <div className="flex flex-col">
                                                    <button
                                                        onClick={() => setActiveSubmenu(activeSubmenu === link.title ? null : link.title)}
                                                        className={cn(
                                                            "flex items-center justify-between w-full py-2 px-4 transition-all duration-300",
                                                            activeSubmenu === link.title
                                                                ? "bg-white text-primary -mx-8 w-[calc(100%+64px)] px-10"
                                                                : "text-white"
                                                        )}
                                                    >
                                                        <span className="font-nav text-xl uppercase font-medium">
                                                            {link.title}
                                                        </span>
                                                        <ChevronDown
                                                            className={cn(
                                                                "w-5 h-5 transition-transform duration-300",
                                                                activeSubmenu === link.title ? "rotate-180" : ""
                                                            )}
                                                        />
                                                    </button>

                                                    <AnimatePresence>
                                                        {activeSubmenu === link.title && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="overflow-hidden bg-white/5"
                                                            >
                                                                <div className="flex flex-col py-4 px-8 border-l-2 border-secondary/30 ml-4 my-2 gap-4">
                                                                    {link.children.map((child: NavItem) => (
                                                                        <div key={child.title} className="flex flex-col gap-3">
                                                                            <a
                                                                                href={child.href}
                                                                                target={child.external ? "_blank" : undefined}
                                                                                rel={child.external ? "noopener noreferrer" : undefined}
                                                                                onClick={() => !child.children && setIsOpen(false)}
                                                                                className="font-nav text-[17px] text-white/90 uppercase hover:text-secondary transition-colors font-medium flex items-center justify-between"
                                                                            >
                                                                                {child.title}
                                                                                {child.children && <ChevronRight className="w-4 h-4 ml-2" />}
                                                                            </a>
                                                                            {child.children && (
                                                                                <div className="flex flex-col gap-3 pl-4 border-l border-white/10">
                                                                                    {child.children.map((subChild: NavItem) => (
                                                                                        <a
                                                                                            key={subChild.title}
                                                                                            href={subChild.href}
                                                                                            target={subChild.external ? "_blank" : undefined}
                                                                                            rel={subChild.external ? "noopener noreferrer" : undefined}
                                                                                            onClick={() => setIsOpen(false)}
                                                                                            className="font-nav text-[15px] text-white/60 uppercase tracking-normal hover:text-secondary transition-colors"
                                                                                        >
                                                                                            {subChild.title}
                                                                                        </a>
                                                                                    ))}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ) : (
                                                <a
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="block py-0 px-4 font-nav text-xl text-white uppercase tracking-widest hover:text-secondary transition-colors font-medium"
                                                >
                                                    {link.title}
                                                </a>
                                            )}
                                        </motion.div>
                                    ))}

                                    {/* Mobile Language Switcher */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + displayLinks.length * 0.05 }}
                                        className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10"
                                    >
                                        <a
                                            href="#"
                                            className="flex items-center gap-3 text-white font-nav text-xl uppercase tracking-widest opacity-50 grayscale"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <div className="w-6 h-5 flex overflow-hidden rounded-[2px] shadow-sm">
                                                <div className="w-1/3 h-full bg-[#009246]"></div>
                                                <div className="w-1/3 h-full bg-white"></div>
                                                <div className="w-1/3 h-full bg-[#ce2b37]"></div>
                                            </div>
                                            <span>IT</span>
                                        </a>
                                        <a
                                            href="/"
                                            className="flex items-center gap-3 text-white font-nav text-xl uppercase tracking-widest"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <div className="w-6 h-5 flex flex-col overflow-hidden rounded-[2px] shadow-sm">
                                                <div className="h-1/4 bg-[#aa151b]"></div>
                                                <div className="h-2/4 bg-[#f1bf00]"></div>
                                                <div className="h-1/4 bg-[#aa151b]"></div>
                                            </div>
                                            <span>ES</span>
                                        </a>
                                    </motion.div>
                                </nav>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header >
    );
}
