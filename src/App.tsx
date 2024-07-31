import { ReactTyped } from "react-typed";
import "./App.css";
import dogfight from "./assets/dogfight.mp4";
import logo from "./assets/idf-logo.png";
import Discord from "./assets/discord.svg?react";

function App() {
  return (
    <>
      <div className="h-full w-full  min-h-screen min-w-screen flex relative justify-center items-center">
        <img
          src={logo}
          className="hidden lg:block absolute z-20 w-[50%] top-0 lg:top-0 lg:left-0 lg:w-[10%] h-auto p-5"
        />
        <video
          src={dogfight}
          autoPlay
          loop
          muted
          className="w-full h-full absolute object-cover"
        />
        <div className="w-full h-full z-10 absolute bg-black opacity-60"></div>
        <div className="absolute z-10 flex p-5 lg:p-0 justify-center items-start flex-col text-white max-w-4xl gap-5 lg:gap-10">
          <img
            src={logo}
            className="block lg:hidden  z-20 w-[20%] top-0 lg:top-0 h-auto"
          />
          <ReactTyped
            strings={["iDF Community"]}
            className="text-xl lg:text-5xl uppercase font-extrabold"
            typeSpeed={100}
            backDelay={5000}
            loop
          />
          <p className=" leading-5  lg:leading-8 text-[.9rem] xl:text-2xl font-thin">
            Are you still flying regularly in Battlefield? Do you want to stay
            in closer contact with other dogfighters? Then you’ll want to join
            the IDF community! We play all the Battlefield games and welcome
            everyone, regardless of background, appearance, age, religion,
            gender, or preferences. As part of our Dogfight Community, anyone
            interested in flying Jets/Bombers in Battlefield can join and be
            part of our vibrant group. We offer both unranked and ranked servers
            sponsored by our members. Joining is completely free, and we aim to
            preserve the spirit of Battlefield Dogfighting. Follow our Discord
            link, complete the application steps, and start playing with us
            today!
          </p>
          <button
            onClick={() => window.open("https://discord.gg/fG4TZVd", "_blank")}
            className="bg-white text-[#5865f2]   flex items-center gap-4 hover:scale-[1.05] transition-all  font-extrabold p-3 lg:p-5 rounded-lg z-20"
          >
            <Discord className="w-10 h-10" /> Join our discord!
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
