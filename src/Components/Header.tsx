import type { ReactNode } from "react";

interface HeaderProps {
  img: { src: string; alt: string };
  children: ReactNode;
}

export default function Header({ img, children }: HeaderProps) {
  return (
    <header>
      <img src={img?.src || ""} alt={img?.alt || "Course Image"} />
      <br />
      {children}
    </header>
  );
}
