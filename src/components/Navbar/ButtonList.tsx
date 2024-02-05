"use client";

import { List, X, FilmSlate, Books, Sun } from "@phosphor-icons/react";
import { useEffect, useState, useRef } from "react";
import { ListComponent } from "./Header";
import { CaretRight } from "@phosphor-icons/react";

const ButtonList = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownReff = useRef<HTMLDivElement | null>(null);

  const open = () => {
    setDropdown((open) => !open);
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (dropdownReff.current && !dropdownReff.current.contains(event.target)) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownReff]);
  return (
    <div className="md:hidden items-center flex" ref={dropdownReff}>
      <button onClick={open} className="dark:text-textLight text-[#9498a1]">
        {!dropdown ? <List size={22}></List> : <X size={22}></X>}
      </button>
      {dropdown && (
        <div className="absolute border-2 bg-background dark:bg-dark w-full inset-x-0 sm:inset-x-4 top-16 h-80 sm:right-0 sm:top-[80px] sm:h-80 sm:w-56 z-50 rounded-xl sm:shadow-md shadow-none">
          <ul className="py-2 my-4 mx-2">
            <li className="py-2 px-3 flex justify-between text-textDark dark:text-textLight">
              <div className="flex gap-4 items-center text-textDark dark:text-textLight">
                <FilmSlate size={15} />
                <ListComponent linkHref="/anime" linkTitle="Anime"></ListComponent>
              </div>
              <CaretRight size={20} />
            </li>
            <li className="py-1 px-3 flex ">
              <hr className="border-1 border-gray w-full"></hr>
            </li>
            <li className="py-2 px-3 flex justify-between text-textDark dark:text-textLight">
              <div className="flex gap-4 items-center text-textDark dark:text-textLight">
                <Books size={15} />
                <ListComponent linkHref="/manga" linkTitle="Manga"></ListComponent>
              </div>
              <CaretRight size={20} />
            </li>
            <li className="py-1 px-3 flex ">
              <hr className="border-1 border-gray w-full"></hr>
            </li>
          </ul>
          <ul className="py-2 mx-2">
            <li className="py-1 px-3 flex text-textDark dark:text-textLight">
              <div className="text-[#9498a1] text-copyright leading-5">Seluruh materi ini dilindungi oleh undang-undang hak cipta © 2024 github.com/kingsbell</div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ButtonList;
