import { fetchRedis } from '@/helpers/redis'
import { db } from '@/lib/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import {z} from 'zod'
export async function POST(req:Request) {
    try {
        const body=await req.json()

        const {id:idToAdd}=z.object({id:z.string()}).parse(body)


        const {getUser}=getKindeServerSession()
        const user=await getUser()
        if(!user) {
            return new Response('Unauthorized',{status:401})
        }
        //verify if both user are not already friend
     const isAlreadyFriends=await fetchRedis('sismember',`user:${user.id}:friends`,idToAdd)
     if(isAlreadyFriends) {
        return new Response('Already friends',{status:400})
     }

    const hasFriendRequest=await fetchRedis('sismember',`user:${user.id}:incoming_friend_requests`,idToAdd)
   

      if(!hasFriendRequest){
        return new Response('No Friend Requests',{status:400})
      }
      await db.sadd(`user:${user.id}:friends`,idToAdd)
      await db.sadd(`user:${idToAdd}:friends`, user.id);
      await db.srem(`user:${user.id}:incoming_friend_requests`, idToAdd);
  
   return new Response('OK')
    } catch (error) {
        if(error instanceof z.ZodError){
            return new Response(error.issues[0].message,{status:422})
        }
        return new Response('Invalid Request',{status:401})
    }
}