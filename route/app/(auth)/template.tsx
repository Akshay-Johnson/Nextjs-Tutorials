"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {useState} from "react";

const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Forgot Password", href: "/forgotpassword" },
];



export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  return (
    <div>
      <div>
        <input className="text-red-500" value ={input} onChange={e => setInput(e.target.value)} /> 
      </div>
        {navLinks.map((link) => {
          const isActive = pathname === link.href || ( pathname.startsWith(link.href) && link.href !== "/"  );
          return (

          <Link className = {isActive ? "text-blue-500" : " text-red-500"} href={link.href} key={link.name}>
            {link.name}
          </Link>
          );
})}
  

      {children}
      </div>

  );
}
