import Link from "next/link";
import MenuIcon from "./Icons/Menu";

function MenuLinks() {
  return (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about" as="/sobre">
          Sobre o projeto
        </Link>
      </li>
    </>
  );
}

export default function Header() {
  return (
    <nav className="navbar bg-base-100">
      <div>
        <div className="dropdown">
          <button
            type="button"
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <MenuIcon />
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <MenuLinks />
          </ul>
        </div>

        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <MenuLinks />
        </ul>
      </div>
    </nav>
  );
}
