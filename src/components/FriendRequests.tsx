'use client'
import { Check, UserPlus } from 'lucide-react';
import { FC, useState } from 'react'

interface FriendRequestsProps {
  incomingFriendRequests: IncomingFriendRequest[]
  sessionId:string
}

const FriendRequests: FC<FriendRequestsProps> = ({
  incomingFriendRequests,
  sessionId,
}) => {
  const [friendRequests, setFriendRequests] = useState<IncomingFriendRequest[]>(
    incomingFriendRequests
  );
  return <>
  {friendRequests.length===0?(
    <p className='text-base'>Nothing to show here...</p>
  ):(
    friendRequests.map((req)=>(
        <div key={req.senderId}>
            <UserPlus/>
            <p>{req.senderId}</p>
            <p>{req.senderEmail}</p>
            <p>{req.senderName}</p>
            <button aria-label='accept-friend'> <Check className='w-34 h-34 font-semibold'/> </button>
            <button></button>
        </div>
    ))
  )}
  </>;
};

export default FriendRequests