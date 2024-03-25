import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Link } from "@mui/material";

async function GlobalNavBar() {
  const session = await getServerSession(authOptions);
  
  return (
    <nav className="bg-green-50 min-w-fit h-[55px] m-2 rounded-full sticky flex flex-row justify-start z-40 p-1 align-middle items-center gap-x-3 drop-shadow-xl">
      <a href="/">
        <Image
          src="/img/logo.svg"
          alt="Logo"
          width="160"
          height="100"
          className="rounded-full inline"
          priority
        />
      </a>
      <a href="/booking">
        <button className="transition h-[90%] w-[170px] text-emerald-500 text-xl font-black bg-white rounded-full border-white border-4 ring-4 ring-emerald-500 hover:bg-emerald-500 hover:text-white hover:text-2xl">
          <p className=" ">BOOKING</p>
        </button>
      </a>
      <a href="/campground">
        <button className="transition h-[90%] w-[200px] text-emerald-500 text-xl font-black bg-white rounded-full border-white border-4 ring-4 ring-emerald-500 hover:bg-emerald-500 hover:text-white hover:text-2xl">
          <p className=" ">CAMPGROUND</p>
        </button>
      </a>
      <a href="/aboutUs">
        <button className="transition h-[90%] w-[170px] text-emerald-500 text-xl font-black bg-white rounded-full border-white border-4 ring-4 ring-emerald-500 hover:bg-emerald-500 hover:text-white hover:text-2xl">
          <p className=" ">ABOUT US</p>
        </button>
      </a>
      {
        session ?
        <Link href="api/auth/signout">
          <div className="flex item-center absolute right-0 h-full px-2">SIGN OUT</div>
        </Link>
        : <Link href="api/auth/signin">
          <div className="flex item-center absolute right-0 h-full px-2">SIGN IN</div>
        </Link>
      }
    </nav>
  );
}

export default GlobalNavBar;
