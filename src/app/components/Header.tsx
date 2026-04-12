"use client";

import { Children, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };


  const navigation = [
    {
      name: "Prabhu Baa",
      href: "/parampujya-paramhans-swami-sugandheshwaranand-rajyogi-prabhu-baa",
    },
    { name: "Shiv Garima", href: "/shiv-garima" },
    { name: "Ashrams", href: "/ashrams" },
    { name: "Meditation", href: "/meditation" },
    { name: "Events", href: "/#events" },
    {
      name: "Forms",
      href: "#",
      Children: [
        { name: "Rudrabhishek", url: "https://zfrmz.in/zu1QZNH6ZBOoCnGp7RHh" },
        { name: "Ashram Visit", url: "https://zfrmz.in/nQKQf4fD87adthF1K8fG" },
        {
          name: "Diksha Request",
          url: "https://zfrmz.in/ZXmxavQkJmUFIDC5xCWE",
        },
        {
          name: "Manokamna Jyoti Kalash",
          url: "https://zfrmz.in/Hyl0pOGnOgGzueoSxLKo",
        },
        {
          name: "Jap Submission",
          url: "https://zfrmz.in/LaKApSWMkpsAMU6bUSc2",
        },
      ],
    },
    { name: "Donation", href: "/donation" },
  ];

  return (
    <header className="bg-amber-300 backdrop-blur-sm z-50 shadow-sm sticky top-0">
      <nav className="section-container py-4 px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="text-2xl font-serif font-bold text-earth-dark"
            >
              <Image
                src={"/assets/svg/logo.svg"}
                width={150}
                height={50}
                alt="logo"
                className="object-contain"
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8 px-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {/* Main Menu Item */}
                <div
                  onClick={() => item.Children && toggleDropdown(item.name)}
                  className="flex items-center cursor-pointer text-earth-brown hover:text-accent-orange transition-colors font-semibold italic text-sm"
                >
                  <Link className="hover:scale-105 transition-all duration-200" href={item.href || "#"}>{item.name}</Link>

                  {/* Arrow Icon */}
                  {item.Children && (
                    <span
                      className={`ml-1 transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                    </span>
                  )}
                </div>

                {/* Dropdown */}
                {item.Children && openDropdown === item.name && (
                  <div className="absolute top-full left-[50%] -translate-x-[50%] mt-2 w-56 bg-amber-200 shadow-lg rounded-md z-50">
                    {item.Children.map((child) => (
                      <a
                        key={child.name}
                        href={child.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-accent-orange hover:bg-white hover:scale-105 transition-all duration-200"
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="lg:hidden p-2 relative z-40"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-earth-brown"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-earth-beige pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-earth-brown hover:text-accent-orange transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* <button className="btn-primary w-full mt-4">Sign In</button> */}
          </div>
        )}
      </nav>
    </header>
  );
}
