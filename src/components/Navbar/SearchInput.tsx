"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  // Button Click
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const keyword = searchRef.current?.value;

    if (keyword) {
      router.push(`/search/${keyword}`);
    }
  };

  // KeyPress Enter
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch(event as React.FormEvent);
    }
  };

  return (
    <div className="relative">
      <div className="absolute start-1.5 top-1.5">
        <button onClick={handleSearch} className="relative dark:text-textLight text-[#9498a1]">
          <MagnifyingGlass size={20.5} />
        </button>
      </div>
      <input
        placeholder="Cari Anime..."
        className="w-32 sm:w-36 placeholder:mx-3.5 p-2 rounded-xl bg-transparent text-textDark dark:text-textLight pl-7 focus:outline-none focus:ring-1 focus:ring-helper placeholder:text-xs text-xs border border-helper placeholder:text-[#9498a1] dark:placeholder:text-textLight"
        ref={searchRef}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};
export default SearchInput;
