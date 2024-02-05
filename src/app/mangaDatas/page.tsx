"use client";

import AnimeList from "@/components/AnimeList/page";
import { HeaderMenu } from "@/components/Navbar/Header";
import Pagination from "@/components/Pagination";
import { coba } from "@/myAPI";
import { useEffect, useState } from "react";

const Manga = () => {
  const [page, setPage] = useState(1);
  const [datasManga, setDataAnime] = useState({ pagination: { last_visible_page: 1 } });

  const fetchData = async () => {
    const getMangas = await coba(`/top/manga?page=${page}`);

    return setDataAnime(getMangas);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="pt-16 flex justify-center">
      <div className="max-w-full bg-background dark:bg-darkBackground rounded-lg">
        <HeaderMenu></HeaderMenu>
        <AnimeList apiTop={datasManga}></AnimeList>

        <Pagination page={page} lastPage={datasManga.pagination.last_visible_page} setPage={setPage}></Pagination>
      </div>
    </div>
  );
};

export default Manga;
