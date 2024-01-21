import Image from "next/image";
import { Inter } from "next/font/google";
import Game from "@/components/Finko/Game";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Game />
    </main>
  );
}
