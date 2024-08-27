import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/accordion";

const games = [
  { label: "Battlefield 2", bg: "bf2.jpg" },
  { label: "Battlefield 3", bg: "bf3.jpg" },
  { label: "Battlefield 4", bg: "bf4.jpg" },
  { label: "Battlefield 1", bg: "bf1.jpg" },
  { label: "Battlefield V", bg: "bfv.png" },
  { label: "Battlefield 2042", bg: "bf2042.jpg" },
];

export const Members = () => {
  const [currentBg, setCurrentBg] = useState<number | null>(null); // I use index because my array is fixed and is simpler to check
  console.log(currentBg);
  return (
    <div
      style={{
        backgroundImage: `url("/src/assets/${
          currentBg ? games[currentBg].bg : "ww2.png"
        }")`,
      }}
      className={`min-h-screen h-full transition-all  bg-cover bg-[50%] relative`}
    >
      <div
        className={`absolute h-full w-full bg-black ${
          [0, null].includes(currentBg) ? "opacity-40" : "opacity-60"
        } !z-10`}
      ></div>
      <div className="h-[20vh]"></div>
      <div className="flex h-full w-full text-white flex-col p-5">
        {games.map((game: { label: string; bg: string }, i: number) => {
          return (
            <Accordion
              key={i + game.label}
              type="single"
              className="!z-20"
              collapsible
            >
              <AccordionItem value={"item-" + i + 1}>
                <AccordionTrigger
                  className="font-bold text-lg"
                  onClick={() => setCurrentBg(i)}
                >
                  {game.label}
                </AccordionTrigger>
                <AccordionContent>hi</AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};
