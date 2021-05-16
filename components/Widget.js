import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import vivian from "../Images/vivian.jpg";
import edward from "../Images/edward.jpg";
import miko from "../Images/miko.jpg";
import joshua from "../Images/joshua.jpg";
import alex from "../Images/alex.jpg";
import Contact from "./Contact";

const contacts = [
  {
    src: `${vivian}`,
    name: "Vivian Foo",
  },
  {
    src: `${edward}`,
    name: "Edward Lee",
  },
  {
    src: `${miko}`,
    name: "Miko Chan",
  },
  {
    src: `${joshua}`,
    name: "Joshua Lee",
  },
  { src: `${alex}`, name: "Alex Chia" },
];

function Widget() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center mb-5 text-gray-600">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2 cursor-pointer">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} name={contact.name} src={contact.src} />
      ))}
    </div>
  );
}

export default Widget;
