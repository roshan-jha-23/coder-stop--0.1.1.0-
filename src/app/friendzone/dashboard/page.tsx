import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = async({}) => {
  const { getUser } = getKindeServerSession();
  const user=await getUser()
  if (!user) {
    return notFound();
  }
  
  return <div>page</div>;
};

export default page;
