import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2 bg-red-200 p-5 flex flex-row justify-evenly">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm  font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Gaurav's
        </span>
        Blog
      </Link>
      <form className="flex flex-row align-middle gap-0">
        <TextInput type="text" placeholder="Search..." />
        <button className="ml-[-20px] font-bold">
          <CiSearch />
        </button>
      </form>
      <div className="flex flex-row gap-3 list-none">
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </div>

      <div className="flex gap-3">
        <button className="bg-white p-3 rounded-full">
          <FaMoon className="" />
        </button>

        <button className="bg-black rounded-lg p-2">
          <Link to="/sign-in" className="text-white">Sign In</Link>
        </button>
      </div>
    </Navbar>
  );
}
