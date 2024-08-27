import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const links = [
    { label: "Home", path: "/" },
    { label: "Our Members", path: "/members" },
  ];
  return (
    <div className="flex flex-col lg:flex-row text-center gap-4 lg:gap-20 absolute text-white top-10 left-[30%] lg:left-1/3 z-20">
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
