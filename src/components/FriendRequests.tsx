"use client";
import axios from "axios";
import { Check, UserPlus, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

interface FriendRequestsProps {
  incomingFriendRequests: IncomingFriendRequest[];
  sessionId: string;
}

const FriendRequests: FC<FriendRequestsProps> = ({
  incomingFriendRequests,
  sessionId,
}) => {
  const [friendRequests, setFriendRequests] = useState<IncomingFriendRequest[]>(
    incomingFriendRequests
  );
  const router = useRouter();
  const acceptFriend = async (senderId: string) => {
    await axios.post("/api/friends/accept", {
      id: senderId,
    });
    setFriendRequests((prev) =>
      prev.filter((request) => request.senderId !== senderId)
    );
    router.refresh();
  };
  const denyFriend = async (senderId: string) => {
    await axios.post("/api/friends/deny", {
      id: senderId,
    });
    setFriendRequests((prev) =>
      prev.filter((request) => request.senderId !== senderId)
    );
    router.refresh();
  };
  return (
    <>
      {friendRequests.length === 0 ? (
        <p className="text-base">Nothing to show here...</p>
      ) : (
        friendRequests.map((req) => (
          <div key={req.senderId}>
            <UserPlus />
            <p>{req.senderId}</p>
            <p>{req.senderEmail}</p>
            <p>{req.senderName}</p>
            <button onClick={()=>acceptFriend(req.senderId)} aria-label="accept-friend">
              {" "}
              <Check className="w-34 h-34 font-semibold" />{" "}
            </button>
            <button  
            onClick={()=>denyFriend(req.senderId)}
            aria-label="deny friend">
              {" "}
              <X className="w-34 h-34 font-semibold" />{" "}
            </button>
          </div>
        ))
      )}
    </>
  );
};

export default FriendRequests;
