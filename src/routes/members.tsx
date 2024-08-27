import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/accordion";
import { MembersData } from "../lib/api";
import { IMember } from "../lib/interfaces";

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

  const [bgChanged, setBgChanged] = useState(false);

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
      ]);
    })();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url("/assets/${
          currentBg ? games[currentBg].bg : "ww2.png"
        }")`,
      }}
      className={`min-h-screen h-full transition-all  bg-cover  bg-[50%] relative`}
    >
      {/* black layer */}
      <div
        className={`absolute h-full w-full bg-black ${
          [0, null].includes(currentBg) ? "opacity-40" : "opacity-60"
        } !z-10`}
      ></div>

      {/* black bg for when bg images change */}
      <div
        className={`absolute h-full w-full transition-all bg-black ${
          bgChanged ? "opacity-100" : "opacity-0"
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
                  onClick={() => {
                    setBgChanged(true);

                    setTimeout(() => setCurrentBg(i), 500);
                    setTimeout(() => setBgChanged(false), 600);
                    console.log("hi");
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
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};
