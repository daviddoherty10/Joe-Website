"use client";

import "./sideBar.css";
import Link from "next/link";

interface SidebarProps {
  title: string;
  icon: React.ReactNode;
  src: string; // Update the type for the icon prop
}

export default function Sidebar(props: SidebarProps) {
  return (
    <li id="sidebar-li">
      {props.icon}
      <Link prefetch={false} id="sidebar-link" href={props.src}>
        {props.title}
      </Link>
    </li>
  );
}
