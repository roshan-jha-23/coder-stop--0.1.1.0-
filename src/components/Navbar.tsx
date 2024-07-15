import {
  faCode
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { FC } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./ui/ModeToggle";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = async ({}) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;
  
  return (
    <nav className="sticky z-50 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="py-2 px-4 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500">
                <img src="/menu-icon.png" alt="Menu" className="h-6 w-6" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-md rounded-md">
                <DropdownMenuLabel className="text-gray-700">
                  --Content--
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-gray-100 text-gray-900">
                  <Link
                    className={buttonVariants({
                      size: "md",
                      variant: "ghost",
                    })}
                    href="/"
                  >
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 text-gray-900">
                  <Link
                    className={buttonVariants({
                      size: "md",
                      variant: "ghost",
                    })}
                    href="/friendzone/dashboard/add"
                  >
                    FriendZone
                  </Link>
                </DropdownMenuItem>
               
                <DropdownMenuItem className="hover:bg-gray-100 text-gray-900">
                  <Link
                    className={buttonVariants({
                      size: "md",
                      variant: "ghost",
                    })}
                    href="/"
                  >
                    Coding Blogs
                    <FontAwesomeIcon className='mx-2' icon={faCode} />
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 text-gray-900">
                  <Link
                    className={buttonVariants({
                      size: "md",
                      variant: "ghost",
                    })}
                    href="/resources"
                  >
                    Resources⭐
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 text-gray-900">
                  <Link
                    className={buttonVariants({
                      size: "md",
                      variant: "ghost",
                    })}
                    href="/aboutus"
                  >
                    About us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 text-gray-900">
                  <Link
                    className={buttonVariants({
                      size: "md",
                      variant: "ghost",
                    })}
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/" className="flex z-40 font-semibold text-gray-900">
              Coder <span className="text-orange-600">Stop</span>
            </Link>
          </div>
          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="/api/auth/logout"
                  className={buttonVariants({
                    size: "md",
                    variant: "ghost",
                  })}
                >
                  Logout
                </Link>
                {isAdmin ? (
                  <Link
                    href="/dashboard"
                    className={buttonVariants({
                      size: "md",
                      variant: "ghost",
                    })}
                  >
                    Dashboard☠️
                  </Link>
                ) : null}

                <ModeToggle />
              </>
            ) : (
              <>
                <Link
                  href="/api/auth/login"
                  className={buttonVariants({ size: "md", variant: "ghost" })}
                >
                  Login
                </Link>
                <Link
                  href="/api/auth/register"
                  className={buttonVariants({ size: "md", variant: "ghost" })}
                >
                  Sign-up
                </Link>
                <ModeToggle />
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
