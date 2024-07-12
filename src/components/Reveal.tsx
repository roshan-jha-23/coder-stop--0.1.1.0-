"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import {
  VscBracketDot,
  VscCircle,
  VscAdd,
  VscBug,
  VscChevronRight,
} from "react-icons/vsc";

const tips = [
  // Java Tips
  "Java: Always close your database connections to avoid resource leaks.",
  "Java: Use meaningful variable names to improve code readability.",
  "Java: Prefer using StringBuilder for string concatenation inside loops.",
  "Java: Use exceptions for exceptional conditions, not for control flow.",
  "Java: Make your classes and methods as small and focused as possible.",
  "Java: Use the final keyword to make your classes immutable.",
  "Java: Avoid using raw types in generics to maintain type safety.",
  "Java: Use enums instead of integer constants for better type safety.",
  "Java: Leverage Java's built-in concurrency utilities for multi-threading.",
  "Java: Use @Override annotation to avoid errors in method overriding.",

  // JavaScript Tips
  "JavaScript: Always declare your variables with let or const.",
  "JavaScript: Use === instead of == for strict equality checks.",
  "JavaScript: Take advantage of template literals for string interpolation.",
  "JavaScript: Use arrow functions to preserve the context of this.",
  "JavaScript: Prefer destructuring assignment for extracting values from arrays or objects.",
  "JavaScript: Avoid global variables to reduce the risk of naming collisions.",
  "JavaScript: Use async/await for cleaner asynchronous code.",
  "JavaScript: Take advantage of ES6 modules to organize your code.",
  "JavaScript: Use default parameters to handle missing function arguments.",
  "JavaScript: Use map, filter, and reduce for array manipulations.",

  // GitHub Tips
  "GitHub: Write meaningful commit messages to make your history easy to understand.",
  "GitHub: Use branches to manage different features and fixes.",
  "GitHub: Regularly pull changes from the main branch to avoid merge conflicts.",
  "GitHub: Take advantage of GitHub Actions for CI/CD automation.",
  "GitHub: Use tags to mark release points in your project's history.",
  "GitHub: Protect your main branch by requiring reviews before merging.",
  "GitHub: Use issues to track bugs and feature requests.",
  "GitHub: Add a README file to explain your project.",
  "GitHub: Use .gitignore to exclude files from being tracked by Git.",
  "GitHub: Take advantage of forks to contribute to open source projects.",

  // C++ Tips
  "C++: Use RAII (Resource Acquisition Is Initialization) to manage resources.",
  "C++: Prefer smart pointers over raw pointers for automatic memory management.",
  "C++: Use const wherever possible to make your code more predictable.",
  "C++: Take advantage of the Standard Template Library (STL) for common data structures and algorithms.",
  "C++: Use range-based for loops for simpler and safer iteration over containers.",
  "C++: Avoid using macros; prefer inline functions and constants.",
  "C++: Use nullptr instead of NULL for pointer initialization.",
  "C++: Take advantage of move semantics to optimize resource management.",
  "C++: Use explicit constructors to avoid implicit conversions.",
  "C++: Leverage compile-time polymorphism with templates for performance.",

  // System Design Tips
  "System Design: Start with a high-level overview before diving into details.",
  "System Design: Identify and define the core requirements and constraints.",
  "System Design: Use load balancers to distribute traffic across multiple servers.",
  "System Design: Consider using caching to reduce load on your database.",
  "System Design: Use a content delivery network (CDN) to serve static content closer to users.",
  "System Design: Design for scalability from the beginning.",
  "System Design: Implement proper monitoring and logging for your system.",
  "System Design: Plan for failure by designing fault-tolerant components.",
  "System Design: Use microservices to break down your system into manageable components.",
  "System Design: Optimize database performance by using indexing and sharding.",
  "Database: Use indexing to speed up query performance.",
  "Database: Normalize your database to eliminate redundancy.",
  "Database: Use denormalization for read-heavy applications to improve performance.",
  "Database: Apply proper data types to save space and improve performance.",
  "Database: Use transactions to ensure data integrity.",
  "Database: Implement foreign keys to maintain referential integrity.",
  "Database: Regularly backup your database to prevent data loss.",
  "Database: Use partitioning to manage large datasets.",
  "Database: Monitor query performance and optimize slow queries.",
  "Database: Use connection pooling to manage database connections efficiently.",
  "Database: Apply constraints to enforce data validity.",
  "Database: Use views to simplify complex queries.",
  "Database: Use stored procedures for reusable and efficient database operations.",
  "Database: Implement proper indexing strategies for optimal performance.",
  "Database: Use ACID properties to ensure reliable transactions.",
  "Database: Optimize your schema design for the application use case.",
  "Database: Use database migrations for versioning your schema changes.",
  "Database: Regularly update statistics for query optimization.",
  "Database: Use replication for high availability and fault tolerance.",
  "Database: Avoid using SELECT * in production queries.",

  // Machine Learning Tips
  "ML: Collect and preprocess high-quality data for better model performance.",
  "ML: Use cross-validation to validate your model's performance.",
  "ML: Choose the right evaluation metric for your problem.",
  "ML: Use feature scaling to normalize your data.",
  "ML: Handle missing values appropriately in your dataset.",
  "ML: Use data augmentation to increase the size of your training set.",
  "ML: Regularize your models to prevent overfitting.",
  "ML: Use ensemble methods to improve model accuracy.",
  "ML: Tune hyperparameters to optimize model performance.",
  "ML: Split your data into training, validation, and test sets.",
  "ML: Monitor and adjust for data drift over time.",
  "ML: Use transfer learning for faster model development.",
  "ML: Visualize your data to understand patterns and relationships.",
  "ML: Use dimensionality reduction techniques to simplify your data.",
  "ML: Validate your model with a separate test set not used in training.",
  "ML: Use interpretable models when explainability is important.",
  "ML: Implement early stopping to prevent overfitting during training.",
  "ML: Use regularization techniques like L1 and L2 to improve generalization.",
  "ML: Leverage cloud-based ML platforms for scalability.",
  "ML: Document your experiments and results for reproducibility.",
];

const icons = [VscBracketDot, VscCircle, VscAdd, VscBug, VscChevronRight];

export function Reveal() {
  return (
   
    <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-700 dark:to-gray-900 w-full gap-4 mx-auto px-8">
      <Card animationSpeed={5.1} containerClassName="bg-emerald-900" />
      <Card
        animationSpeed={3}
        containerClassName="bg-black"
        colors={[
          [236, 72, 153],
          [232, 121, 249],
        ]}
        dotSize={2}
      />
      <Card
        animationSpeed={3}
        containerClassName="bg-sky-600"
        colors={[[125, 211, 252]]}
      />
    </div>
  );
}

const Card = ({
  animationSpeed,
  containerClassName,
  colors,
  dotSize,
}: {
  animationSpeed: number;
  containerClassName: string;
  colors?: number[][];
  dotSize?: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const [randomTip, setRandomTip] = useState("");
  const [RandomIcon, setRandomIcon] = useState(() => icons[0]);

  const handleMouseEnter = () => {
    setRandomTip(tips[Math.floor(Math.random() * tips.length)]);
    setRandomIcon(() => icons[Math.floor(Math.random() * icons.length)]);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] transition-transform transform hover:scale-105 ${containerClassName}`}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={animationSpeed}
              containerClassName={containerClassName}
              colors={colors}
              dotSize={dotSize}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          <RandomIcon className="h-10 w-10 text-white" />
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {randomTip}
        </h2>
      </div>
    </div>
  );
};

const Icon = ({ className }: { className: string }) => (
  <svg
    width="66"
    height="65"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-10 w-10 ${className}`}
  >
    <path
      d="M16 18L22 12L16 6M8 6L2 12L8 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
