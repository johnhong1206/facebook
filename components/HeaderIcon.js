function HeaderIcon({ Icon, active }) {
  return (
    <div className=" flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-400 group">
      <Icon
        className={`h-5 w-5 text-center sm:h-7 mx-auto text-gray-500 group-hover:text-blue-500
        ${active && "text-blue-500"}`}
      />
    </div>
  );
}

export default HeaderIcon;