import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/accordion";
import { MembersData } from "../lib/api";
import { IMember } from "../lib/interfaces";
import { Bf2042Members, Bf2Members } from "../static-data"; //using static data because no API is available for bf2
import GameBgImage from "../components/game-bg-image";

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
  const [ourMembers, setOurMembers] = useState<Array<{
    label: string;
    data: Array<IMember>;
  }> | null>(null);

  const membersData = new MembersData();

  useEffect(() => {
    (async () => {
      const [bfvMembers, bf1Members] = await Promise.all([
        membersData.getBfvMembers(),
        membersData.getBf1Members(),
      ]);

      setOurMembers([
        { label: "Battlefield V", data: bfvMembers },
        { label: "Battlefield 1", data: bf1Members },
        { label: "Battlefield 2", data: Bf2Members },
        { label: "Battlefield 2042", data: Bf2042Members },
      ]);
    })();
  }, []);

  console.log(currentBg);
  return (
    <div
      className={`min-h-screen h-full transition-all bg-black  bg-cover  bg-[50%] relative`}
    >
      {/* black layer */}
      <div className={`absolute h-full w-full bg-black opacity-80 !z-10`}></div>

      <img
        src={"/assets/" + games[0]?.bg}
        className={`absolute h-full w-full object-cover transition-all z-1 ${
          ![0, null].includes(currentBg) ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* prefetch all images */}
      {games.map((el, i) => {
        return (
          <GameBgImage
            key={el.bg + el.label}
            bg={el.bg}
            show={currentBg === i}
          />
        );
      })}
      <div className="h-[20vh]"></div>
      <div className="flex h-full w-full text-white flex-col p-5 pb-40">
        <Accordion type="single" className="!z-20" collapsible>
          {games.map((game: { label: string; bg: string }, i: number) => {
            return (
              <AccordionItem key={i + game.label} value={"item-" + i + 1}>
                <AccordionTrigger
                  className="font-bold text-lg"
                  onClick={() => {
                    setCurrentBg(i);
                  }}
                >
                  {game.label}
                </AccordionTrigger>
                <AccordionContent>
                  {ourMembers
                    ?.find((m) => m.label === game.label)
                    ?.data.map((member: IMember, i: number) => (
                      <div
                        key={i + member.id}
                        className="flex flex-row gap-2 w-full font-sans"
                      >
                        <span>{member.name}</span>
                        <span>({member.role})</span>
                      </div>
                    ))}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};
