"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

interface CF {
  contestId: number;
  index: string;
  name: string;
  type: string;
  rating: number;
  tags: string[];
}

function Page() {
  const [tag, setTag] = useState<string>("");
  const [problems, setProblems] = useState<CF[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchProblem = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://codeforces.com/api/problemset.problems?tags=${tag}`
      );
      const data = await response.json();
      if (data.status === "OK") {
        setProblems(data.result.problems);
        setCurrentPage(1); // Reset to first page on new fetch
      } else {
        setError(data.comment);
      }
    } catch (error) {
      setError("Failed to fetch problems data");
    } finally {
      setLoading(false);
    }
  };

  const problemsPerPage = 10;
  const indexOfLastProblem = currentPage * problemsPerPage;
  const indexOfFirstProblem = indexOfLastProblem - problemsPerPage;
  const currentProblems = problems.slice(
    indexOfFirstProblem,
    indexOfLastProblem
  );

  const totalPages = Math.ceil(problems.length / problemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-gradient-to-b from-black to-blue min-h-screen">
      <div className="flex flex-col items-center justify-center mt-24">
        <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-md">
          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="Enter problem tag (e.g., implementation, dp, math)"
            className="w-full p-2 border rounded mb-4"
          />
          <button
            onClick={fetchProblem}
            className="w-full bg-blue-500 p-2 rounded hover:bg-blue-600"
          >
            Fetch Problems
          </button>

          {loading && <p className="mt-4 text-center">Loading...</p>}
          {error && <p className="mt-4 text-center">Error: {error}</p>}
          {problems.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {currentProblems.map((problem) => (
                  <a
                    key={`${problem.contestId}-${problem.index}`}
                    href={`https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded shadow bg-gray-800 hover:bg-gray-700"
                  >
                    <p>
                      <strong>Name:</strong> {problem.name}
                    </p>
                    <p>
                      <strong>Contest ID:</strong> {problem.contestId}
                    </p>
                    <p>
                      <strong>Index:</strong> {problem.index}
                    </p>
                    <p>
                      <strong>Type:</strong> {problem.type}
                    </p>
                    <p>
                      <strong>Rating:</strong> {problem.rating}
                    </p>
                    <p>
                      <strong>Tags:</strong> {problem.tags.join(", ")}
                    </p>
                  </a>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                >
                  <FontAwesomeIcon icon={faArrowLeft} /> Previous
                </button>
                <span className="text-center py-2">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                >
                  Next <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <hr className="w-full my-8 border-t-2 border-gray-300" />
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Resources</h1>
        <div>
          <ul className="space-y-4">
            <li>
              <p className="text-xl font-semibold">TLE Eliminator</p>
              <Link
                href="https://www.tle-eliminators.com/cp-sheet"
                className="text-blue-400 hover:underline"
              >
                <FontAwesomeIcon icon={faLink} /> Visit TLE Eliminator
              </Link>
            </li>
            <li>
              <p className="text-xl font-semibold">Striver Sheet</p>
              <Link
                href="https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/"
                className="text-blue-400 hover:underline"
              >
                <FontAwesomeIcon icon={faLink} /> Visit Striver Sheet
              </Link>
            </li>
            <li>
              <p className="text-xl font-semibold">CSES Sheet</p>
              <Link
                href="https://cses.fi/problemset/"
                className="text-blue-400 hover:underline"
              >
                <FontAwesomeIcon icon={faLink} /> Visit CSES Sheet
              </Link>
            </li>
          </ul>
        </div>
        <p className="mt-24 text-sm">
          I own none of these resources. Clicking the links will take you to
          their respective actual links.
        </p>
      </div>
    </div>
  );
}

export default Page;
