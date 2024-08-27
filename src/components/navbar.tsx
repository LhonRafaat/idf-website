import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoadingContext } from "../lib/context";

export const Navbar = () => {
  const links = [
    { label: "Home", path: "/" },
    { label: "Our Members", path: "/members" },
  ];

  const isLoading = useContext(LoadingContext);
  return (
    <div
      style={{ opacity: isLoading ? 0 : 1 }}
      className="flex flex-col lg:flex-row text-center gap-4 lg:gap-20 absolute text-white top-10 left-[30%] lg:left-1/3 z-20"
    >
      {links.map((link) => (
        <NavLink
          className={({ isActive }) =>
            (isActive ? "text-[#5865f2]" : "") +
            " font-bold text-lg hover:scale-105 transition-all"
          }
          to={link.path}
          key={link.label}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};
