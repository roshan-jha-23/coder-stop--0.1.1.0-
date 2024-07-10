import { ModeToggle } from "@/components/ui/ModeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="m-0 text-white p-0 absolute top-0 right-0">
        <ModeToggle />
      </div>
      <h1>hi bro</h1>
    </div>
  );

}
