"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Roshan Jha",
    designation: "Software Engineer",
    image: "/team/1.png",
  },
  {
    id: 2,
    name: "Itachi",
    designation: "Product Manager",
    image: "/team/2.png",
  },
  {
    id: 3,
    name: "Gothamka rakhwala",
    designation: "Data Scientist",
    image: "/team/3.png",
  },
  {
    id: 4,
    name: "superman",
    designation: "UX Designer",
    image: "/team/4.png",
  },
  {
    id: 5,
    name: "spidey",
    designation: "Soap Developer",
    image: "/team/5.png",
  },
  {
    id: 6,
    name: "luffy",
    designation: "The Explorer",
    image: "/team/6.png",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
