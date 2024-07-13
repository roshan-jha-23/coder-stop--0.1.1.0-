import Link from "next/link";
import { FC } from "react";

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 p-5">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-8">

            {/* Links stopped working */}
          We would love to hear from you!
          <br />
          Connect with us on our social platforms.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="https://discord.gg/h4eU9Zjj" >
            
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-discord"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
              </svg>
            
          </Link>
          <Link href="https://x.com/lonely_sheperd_">
           
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.916 9.916 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.875 9.875 0 01-3.127 1.195 4.922 4.922 0 00-8.384 4.482 13.953 13.953 0 01-10.141-5.145 4.822 4.822 0 00-.666 2.476 4.922 4.922 0 002.188 4.097 4.904 4.904 0 01-2.228-.615c-.054 1.996 1.403 3.884 3.48 4.292a4.935 4.935 0 01-2.224.085 4.926 4.926 0 004.602 3.417A9.875 9.875 0 010 21.54a13.939 13.939 0 007.548 2.212c9.058 0 14.015-7.507 14.015-14.015 0-.214-.005-.427-.014-.64A9.993 9.993 0 0024 4.557z" />
              </svg>
           
          </Link>
          <Link href="https://www.linkedin.com/in/roshan-jha-20m10/" >
           
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.3c-1.07 0-1.95-.89-1.95-1.95 0-1.07.88-1.95 1.95-1.95 1.07 0 1.95.88 1.95 1.95 0 1.07-.88 1.95-1.95 1.95zm13.5 12.3h-3v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.7h-3v-11h2.88v1.5h.04c.4-.76 1.38-1.55 2.85-1.55 3.05 0 3.62 2.01 3.62 4.62v6.43z" />
              </svg>
           
          </Link>
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="relative z-10 text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 text-center font-sans font-extrabold leading-tight">
          Your Feedback Matters
        </h1>
        <p className="text-neutral-400 max-w-lg mx-auto my-4 text-md md:text-lg text-center relative z-10">
          Welcome to CoderStop, the ultimate destination for all your coding
          needs. From tutorials to tools and resources, we have everything a
          coder requires to thrive. Join us and elevate your coding journey! We
          would love to hear your feedback—let us know how we can improve your
          experience.
        </p>
        <div className="relative z-10 w-full">
          <input
            type="text"
            placeholder="Your Feedback"
            className="rounded-lg border border-neutral-700 focus:ring-2 focus:ring-teal-400 w-full mt-4 bg-neutral-900 text-neutral-200 placeholder-neutral-500 p-3"
            aria-label="Enter your feedback"
          />
          <Link href="/">
            
              <button className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold hover:from-teal-500 hover:to-blue-600 transition-all duration-300 ease-in-out">
                Submit Feedback
              </button>
            
          </Link>
        </div>
      </div>
     
    </div>
  );
};

export default Page;
