/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import { buttonVariants } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FC, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUsers, faBars } from "@fortawesome/free-solid-svg-icons";

interface LayoutProps {
  children: ReactNode;
}
interface SidebarOptions {
  id: number;
  name: string;
  href: string;
  icon: any;
}
const sidebarOptions: SidebarOptions[] = [
  {
    id: 1,
    name: "Add Friend",
    href: "/friendzone/dashboard/add",
    icon: faUserPlus,
  },
  {
    id: 2,
    name: "Your Friends",
    href: "/friendzone/dashboard/friends",
    icon: faUsers,
  },
];

const Layout: FC<LayoutProps> = async ({ children }) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const picurl = user?.picture;

  if (!user) {
    return notFound();
  }

  return (
    <div className="flex h-screen w-full">
      <div className="flex h-full w-full max-w-xs flex-col gap-y-5 overflow-y-auto border-r">
        <Link
          href="/friendzone/dashboard"
          className="flex h-16 items-center justify-center border-b"
        >
          <FontAwesomeIcon icon={faBars} className="w-10 h-10" />
        </Link>

        <div className="px-4 py-2 text-xs font-semibold leading-6">
          Your Chats
        </div>
        <nav className="flex flex-1 flex-col px-4">
          <ul role="list" className="flex flex-1 flex-col gap-y-4">
            <li>//chats will come here</li>
            <li>
              <div className="text-xs font-semibold leading-6">Overview</div>
              <ul role="list" className="mt-2 space-y-1">
                {sidebarOptions.map((option) => (
                  <li key={option.id}>
                    <Link
                      href={option.href}
                      className={`${buttonVariants({
                        size: "md",
                        variant: "secondary",
                      })} flex items-center gap-x-2 px-2 py-1.5 rounded-md hover:bg-gray-200`}
                    >
                      <FontAwesomeIcon icon={option.icon} className="w-4 h-4" />
                      <span>{option.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="mt-auto flex items-center gap-x-4 border-t px-4 py-3 text-sm font-semibold leading-6">
              <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gray-50">
                <img
                  src={picurl}
                  alt="profilepic"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div>{user.username}</div>
                <div className="text-xs">{user.email}</div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
