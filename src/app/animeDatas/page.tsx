"use client";

import AnimeList from "@/components/AnimeList/page";
import { HeaderMenu } from "@/components/Navbar/Header";
import Pagination from "@/components/Pagination";
import { coba } from "@/myAPI";
import { useEffect, useState } from "react";

const Anime = () => {
  const [page, setPage] = useState(1);
  const [datasAnime, setDataAnime] = useState({ pagination: { last_visible_page: 1 } });

  const fetchData = async () => {
    const getAnimes = await coba(`/top/anime?page=${page}`);

    return setDataAnime(getAnimes);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="pt-16 flex justify-center">
      <div className="max-w-full bg-background dark:bg-darkBackground rounded-lg">
        <HeaderMenu></HeaderMenu>
        <AnimeList apiTop={datasAnime}></AnimeList>

        <Pagination page={page} lastPage={datasAnime.pagination.last_visible_page} setPage={setPage}></Pagination>
      </div>
    </div>
  );
};

export default Anime;
