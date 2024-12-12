"use client";

import React from "react";
import { Header, Nav } from "./NavBar.styled";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Posts",
    href: "/posts",
  },
  {
    label: "Create Post",
    href: "/create",
  },
];

const linkStyle = {
  boldColor: "rgb(24, 24, 27)",
  lightColor: "rgb(161, 161, 170)",
};

const NavBar = () => {
  const pathname = usePathname();
  return (
    <Header>
      Logo
      <Nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                style={{
                  color:
                    pathname === link.href
                      ? linkStyle.boldColor
                      : linkStyle.lightColor,
                }}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Nav>
    </Header>
  );
};

export { NavBar };
