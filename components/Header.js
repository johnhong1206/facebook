import Image from "next/image";
import Logo from "../Images/FacebookLogo.png";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

function Header() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="sticky top-0 z-50 bg-white p-2 lg:p-50 shadow-md">
      <div className="flex items-center">
        <Image src={Logo} width={40} height={40} layout="fixed" />
        <div className="flex ml-2 items-center rounded-full text-gray-600 bg-gray-100 p-2">
          <SearchIcon className="h-6 w-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook "
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
          />
        </div>
        <div className="flex justify-center flex-grow">
          <div className="flex space-x-6 md:space-x-2">
            <HeaderIcon Icon={HomeIcon} active />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
          </div>
        </div>

        <div className="flex items-center sm:space-x-2 justify-end">
          <Image
            onClick={() => auth.signOut()}
            className="rounded-full cursor-pointer"
            src={user.photoURL}
            width="40"
            height="40"
            layout="fixed"
          />
          <p className="hidden md:inline-flex whitespace-nowrap font-semibold pr-3">
            {user?.displayName}
          </p>
          <ViewGridIcon className="icon" />
          <ChatIcon className="icon" />
          <BellIcon className="icon" />
          <ChevronDownIcon className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
