import AnimeList from "@/components/AnimeList/page";
import MangaList from "@/components/MangaList";
import Header from "@/components/Navbar/Header";
import myAPI from "@/myAPI";

const SearchAnime = async ({ params }: any) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);

  const searchAnime = await myAPI(`/anime?q=${decodeKeyword}`);
  const searchManga = await myAPI(`/manga?q=${decodeKeyword}`);

  return (
    <>
      <section className="mt-5">
        <Header title={`Pencarian untuk ${decodeKeyword}`}></Header>
        <div className="mt-5">
          <Header title="Anime"></Header>
        </div>
        <AnimeList apiTop={searchAnime}></AnimeList>
        <div className="mt-5">
          <Header title="Manga"></Header>
        </div>
        <MangaList apiManga={searchManga}></MangaList>
      </section>
    </>
  );
};
export default SearchAnime;
