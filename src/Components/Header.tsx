import type { ReactNode } from "react";

interface HeaderProps {
  img: { src: string; alt: string };
  children: ReactNode;
}

export default function Header({ img, children }: HeaderProps) {
  return (
    <header>
      <h1>Welcome to the Course</h1>
      <img src={img?.src || ""} alt={img?.alt || "Course Image"} />
      <br />
      {children}
    </header>
  );
}
