import { usePresence } from "@roomservice/react";
import { useEffect } from "react";
import Cursor from "../lib/Cursor.tsx";

export default function Home() {
  //usePresence() takes in a "room" name,
  const [positions, setMyPosition] = usePresence(
    "presenceRoomName",
    "positions"
  );

  useEffect(() => {
    const listener = (e) => {
      setMyPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    document.addEventListener("mousemove", listener);
    return () => document.removeEventListener("mousemove", listener);
  });

  return (
    <div>
      {Object.entries(positions).map(([key, val]) => (
        <Cursor key={key} x={val.x} y={val.y} />
      ))}
    </div>
  );
}
