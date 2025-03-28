import { useState } from "react";

// import user from heroicons
import { UserIcon } from "@heroicons/react/24/outline";

export default function Network() {
  const [isConnected, setIsConnected] = useState(false);
  const pulse = isConnected ? "bg-blue-500" : "bg-red-500";
  const activePeers = [
    { name: "John Doe", id: "0x456" },
    { name: "Alice Johnson", id: "0x789" },
    { name: "Bob Smith", id: "0xabc" },
    { name: "Charlie Brown", id: "0xdef" },
    { name: "Diana Green", id: "0x123" },
    { name: "Ethan White", id: "0x456" },
    { name: "Fiona Black", id: "0x789" },
    { name: "George Blue", id: "0xabc" },
    { name: "Hannah Red", id: "0xdef" },
    { name: "Ivy Yellow", id: "0x123" },
    { name: "Jack Green", id: "0x456" },
    { name: "Kyle Blue", id: "0x789" },
    { name: "Lily Red", id: "0xabc" },
  ];
  return (
    <div className="flex flex-col items-center  h-screen ">
      <div className="max-w-md w-full">
        <header className="flex items-center justify-between">
          <h2>Network</h2>
          <div className="relative flex size-4">
            <span
              className={`size-4 animate-ping rounded-full ${pulse}`}
            ></span>
            <span className={`absolute inset-0 rounded-full ${pulse}`}></span>
          </div>
        </header>
        <ul className="flex flex-col ">
          {activePeers.map((peer) => (
            <li
              key={peer.id}
              className="odd:bg-sky-50/70 py-2 cursor-pointer hover:bg-sky-50 flex gap-2 items-center"
              onClick={() => {
                window.alert("This should connect to peer " + peer.name);
              }}
            >
              <UserIcon className="size-4" />
              {peer.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
