import { db } from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import {z} from 'zod'
export async function POST(req:Request) {
    try {
        const body=await req.json()
        const {getUser}=getKindeServerSession()
        const user=await getUser();
        if(!user){
            return new Response("Unauthorized", {status:401})
        }
          const { id: idToDeny } = z.object({ id: z.string() }).parse(body);
          await db.srem(`user:${user.id}:incoming_friend_requests`,idToDeny)
          return new Response("OK", {status:200})
    } catch (error) {
        if (error instanceof z.ZodError) {
          return new Response(error.issues[0].message, { status: 422 });
        }
        return new Response("Invalid Request", { status: 401 });
    }
}