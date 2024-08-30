'use client';
import Link from "next/link";
import MenuIcon from "../Icons/Menu";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function MenuLinks() {
  const pathname = usePathname();

  const activeClass = "text-white";
  
  return (
    <>
      <li>
        <Link href="/" className={pathname == "/" ? activeClass : ""}>
          Início
        </Link>
      </li>
      <li>
        <Link href="/about" className={pathname == "/sobre" ? activeClass : ""}>
          Sobre o projeto
        </Link>
      </li>
    </>
  );
}

export default function Header() {
  return (
    <nav className="navbar bg-base-100 flex align-center justify-center">
      <div className="container">
      <div >
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

        <a className="btn btn-ghost text-xl">
          <Image src="/logo.svg" width={24} height={24} alt="logo" />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <MenuLinks />
        </ul>
      </div>
      </div>
    </nav>
  );
}
