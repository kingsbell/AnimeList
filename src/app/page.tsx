import AnimeList from "@/components/AnimeList/page";
import MangaList from "@/components/MangaList/index";
import Header from "@/components/Navbar/Header";
import SubNavbar from "@/components/Navbar/SubNavbar/page";
import myAPI from "@/myAPI/index";

const Home = async () => {
  const animePopuler = await myAPI(`/top/anime?limit=10`);
  const animeTrailer = await myAPI(`/top/anime?limit=1`);
  const manga = await myAPI(`/top/manga?limit=8`);
  return (
    <>
      <section>
        <SubNavbar apiTrailer={animeTrailer}></SubNavbar>
      </section>
      <section>
        <Header title="Anime" linkHref="/animeDatas" linkTitle="Lihat Semua"></Header>
        <AnimeList apiTop={animePopuler}></AnimeList>
      </section>
      <section>
        <Header title="Manga" linkHref="/mangaDatas" linkTitle="Lihat Semua"></Header>
        <MangaList apiManga={manga}></MangaList>
      </section>
    </>
  );
};
export default Home;
