"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeam1() {
  return (
    <TracingBeam className="px-6 bg-black text-white">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-white text-black rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="app feature thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Why CoderStop is the Perfect Tool for Coders",
    description: (
      <>
        <p>
          CoderStop provides a comprehensive suite of tools designed to meet all
          the needs of modern coders. With features like real-time code
          collaboration, integrated development environments (IDEs), and
          extensive libraries, it simplifies the coding process and enhances
          productivity.
        </p>
        <p>
          Our platform supports multiple programming languages, allowing coders
          to work on diverse projects seamlessly. Additionally, CoderStop
          includes robust debugging tools, making it easier to identify and fix
          issues quickly.
        </p>
        <p>
          CoderStop also offers a vibrant community forum where coders can share
          knowledge, ask for help, and collaborate on projects. Our regular
          updates ensure that you always have access to the latest features and
          improvements.
        </p>
      </>
    ),
    badge: "Features",
    image: "/tracing/1.png",
  },
  {
    title: "CoderStop's Collaborative Coding Environment",
    description: (
      <>
        <p>
          Collaboration is key to successful coding projects, and CoderStop
          excels in providing an environment where coders can work together
          effortlessly. Our real-time code editor supports simultaneous editing,
          allowing teams to code together no matter where they are.
        </p>
        <p>
          With integrated video and voice chat, teams can discuss code changes
          and troubleshoot issues in real-time, ensuring that everyone is on the
          same page. CoderStops version control system keeps track of all
          changes, making it easy to revert to previous versions if needed.
        </p>
      </>
    ),
    badge: "Collaboration",
    image: "/tracing/2.png",
  },
  {
    title: "Enhance Your Coding Skills with CoderStop",
    description: (
      <>
        <p>
          At CoderStop, we believe in continuous learning and improvement. Our
          platform offers a variety of tutorials, coding challenges, and
          resources to help you enhance your skills. Whether you are a beginner
          or an experienced coder, you will find valuable content to aid your
          learning journey.
        </p>
        <p>
          Participate in coding competitions, join study groups, and take
          advantage of our extensive documentation to become a better coder.
          CoderStop is dedicated to providing you with the tools and resources
          you need to succeed.
        </p>
      </>
    ),
    badge: "Learning",
    image: "/tracing/3.png",
  },
];
