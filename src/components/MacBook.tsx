import React from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import Link from "next/link";

export function MacBook() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            Whats up Coder <br /> <span className="text-semibold text-lime-600">Lets cook.</span>
          </span>
        }
        badge={
          <Link href="https://www.linkedin.com/in/roshan-jha-20m10/">
            <CodeStopBadge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/macbook.png`}
        showGradient={false}
      />
    </div>
  );
}
const CodeStopBadge = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="28" cy="28" r="28" fill="#1E1E1E" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="20"
        fill="#FFFFFF"
        fontFamily="Arial, sans-serif"
      >
        CS
      </text>
    </svg>
  );
};
