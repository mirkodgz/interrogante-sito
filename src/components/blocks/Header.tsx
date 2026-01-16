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

interface NavLink {
    title: string;
    href: string;
    children?: { title: string; href: string; external?: boolean }[];
}

export default function Header({ links }: { links?: NavLink[] }) {
    const displayLinks = links || navigationLinks;
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
                "fixed top-0 left-0 w-full z-[120] transition-all duration-300",
                scrolled
                    ? "bg-primary shadow-lg py-2"
                    : "bg-primary/90 backdrop-blur-sm py-4"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="relative z-[130] flex items-center group">
                    <img
                        src="/Logo-Interrogante-white2.svg"
                        alt="Interrogante Spettacolo"
                        className="h-[55px] w-auto object-contain"
                    />
                </a>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex ml-auto items-center gap-1">
                    {displayLinks.map((link) => (
                        <NavigationMenu key={link.title}>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    {link.children ? (
                                        <>
                                            <NavigationMenuTrigger className="!bg-transparent text-white hover:text-secondary transition-colors !font-nav text-[18px] tracking-normal uppercase px-2">
                                                {link.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[240px] gap-0 p-0 bg-primary border border-white/10 shadow-2xl">
                                                    {link.children.map((child) => (
                                                        <li key={child.title} className="border-b border-white/5 last:border-0">
                                                            <NavigationMenuLink asChild>
                                                                <a
                                                                    href={child.href}
                                                                    target={child.external ? "_blank" : undefined}
                                                                    rel={child.external ? "noopener noreferrer" : undefined}
                                                                    className="block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary hover:text-white"
                                                                >
                                                                    <div className="text-[14px] font-medium leading-none uppercase tracking-normal font-nav text-white">
                                                                        {child.title}
                                                                    </div>
                                                                </a>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                    ) : (
                                        <NavigationMenuLink
                                            href={link.href}
                                            className="text-white hover:text-secondary transition-colors font-nav text-[18px] tracking-normal uppercase px-2 py-2 block"
                                        >
                                            {link.title}
                                        </NavigationMenuLink>
                                    )}
                                </NavigationMenuItem>
                            </NavigationMenuList>
                            {/* Local Viewport for this specific menu item */}
                            <div className="absolute left-0 top-full mt-2">
                                <NavigationMenuViewport className="!bg-primary border-none shadow-2xl text-white origin-top-left h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] overflow-hidden rounded-md transition-[width,_height] duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90" />
                            </div>
                        </NavigationMenu>
                    ))}
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
                            className="fixed inset-0 h-[100vh] w-full bg-black z-[110] lg:hidden"
                        >
                            <div className="flex flex-col h-full pt-32 px-10 overflow-y-auto pb-10">
                                <nav className="flex flex-col gap-8">
                                    {displayLinks.map((link, i) => (
                                        <motion.div
                                            key={link.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 + i * 0.05 }}
                                        >
                                            {link.children ? (
                                                <div className="flex flex-col gap-4">
                                                    <span className="font-nav text-2xl text-white uppercase tracking-normal">
                                                        {link.title}
                                                    </span>
                                                    <div className="flex flex-col gap-4 pl-4 border-l border-secondary/30">
                                                        {link.children.map((child) => (
                                                            <a
                                                                key={child.title}
                                                                href={child.href}
                                                                target={child.external ? "_blank" : undefined}
                                                                rel={child.external ? "noopener noreferrer" : undefined}
                                                                onClick={() => setIsOpen(false)}
                                                                className="font-nav text-[18px] text-gray-400 uppercase tracking-normal hover:text-secondary transition-colors"
                                                            >
                                                                {child.title}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            ) : (
                                                <a
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="font-nav text-4xl text-white uppercase tracking-normal hover:text-secondary transition-colors"
                                                >
                                                    {link.title}
                                                </a>
                                            )}
                                        </motion.div>
                                    ))}
                                </nav>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header >
    );
}
