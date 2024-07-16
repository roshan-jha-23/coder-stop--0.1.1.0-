import FriendRequests from "@/components/FriendRequests";
import { fetchRedis } from "@/helpers/redis";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";

interface PageProps {}

const Page = async ({}: PageProps) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return notFound();
  }

  const incomingSenderIds = (await fetchRedis(
    "smembers",
    `user:${user.id}:incoming_friend_requests`
  )) as string[];
  const incomingFriendRequests = await Promise.all(
    incomingSenderIds.map(async (senderId) => {
      const sender = (await fetchRedis("get", `user:${senderId}`)) as string;
const senderParsed=JSON.parse(sender) as User
      return {
        senderId,
        senderEmail: senderParsed?.email,
        senderName: senderParsed?.name,
      };
    })
  );

  return (
    <main className="pt-8">
      <h1>Friend Request</h1>
      <div className="flex flex-col gap-4">
        <FriendRequests
          incomingFriendRequests={incomingFriendRequests}
          sessionId={user.id}
        />
      </div>
    </main>
  );
};

export default Page;
