import { fetchRedis } from "@/helpers/redis";
import { db } from "@/lib/db";
import { addFriendValidator } from "@/lib/validations/add-friend";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { z } from "zod";
console.log("1");

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email: emailToAdd } = addFriendValidator.parse({
      email: body.email,
    });
console.log("11");
    const RESTResponse = await fetch(
      `${process.env.UPSTASH_REDIS_REST_URL}/get/user:email:${emailToAdd}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
        },
        cache: "no-store",
      }
    );

    const data = (await RESTResponse.json()) as { result: string | null };
    const idToAdd = data.result;
    if (!idToAdd) {
      return new Response("This person does not exist.", { status: 400 });
    }

    const { getUser } = await getKindeServerSession();
    const user = await getUser();
    if (!user) {
      return new Response("Unauthorized", { status: 401 });
    }

    if (idToAdd === user.id) {
      return new Response("You cannot add yourself as a friend.", {
        status: 400,
      });
    }

    // Check if user is already added
    const isAlreadyAdded = (await fetchRedis(
      "sismember",
      `user:${idToAdd}:incoming_friend_requests`,
      user.id
    )) as 0 | 1;
    if (isAlreadyAdded) {
      return new Response("You have already added this person as a friend.", {
        status: 400,
      });
    }

    const isAlreadyFriend = (await fetchRedis(
      "sismember",
      `user:${user.id}:friends`,
      idToAdd
    )) as 0 | 1;
    if (isAlreadyFriend) {
      return new Response("You are already friends with this person.", {
        status: 400,
      });
    }

    await db.sadd(`user:${idToAdd}:incoming_friend_requests`, user.email);

    return new Response("Friend added successfully.", { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.issues[0].message, { status: 400 });
    }
    return new Response("An error occurred.", { status: 500 });
  }
}
