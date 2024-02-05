import { coba, getProducers, getAllProducersData, getAllLicensorsData, getAllStudiosData, getAllGenresData, getAllThemeData, getAllDemographicsData } from "@/myAPI";
import Image from "next/image";
import AlternativeTitle from "@/components/AnimeDetail/page";
import AnimeCharacterAndVoice from "@/components/AnimeCharactersAndVoice/page";

const Page = async ({ params: { id } }: any) => {
  // Get Data From API
  const anime = await coba(`/anime/${id}`);
  const characters = await coba(`/anime/${id}/characters`);
  const staffs = await coba(`/anime/${id}/staff`);
  const audioThemes = await coba(`/anime/${id}/themes`);
  const getProducersData = await getProducers(anime);
  const getAllProducersDatas = await getAllProducersData(anime);
  const getAllLicensorsDatas = await getAllLicensorsData(anime);
  const getAllStudiosDatas = await getAllStudiosData(anime);
  const getAllGenresDatas = await getAllGenresData(anime);
  const getAllThemeDatas = await getAllThemeData(anime);
  const getAllDemographicsDatas = await getAllDemographicsData(anime);

  // Function Rename From Api
  const upperFirstCharacter = () => {
    const firstletter = anime.data.season ? anime.data.season.charAt(0).toUpperCase() : "Undefined";
    const result = anime.data.season ? anime.data.season.slice(1).toLowerCase() : "Undefined";

    return firstletter + result;
  };

  const animeAired = () => {
    const aired = new Date(anime.data.aired.from?.slice(0, 10));
    const airedDate = aired.toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    return airedDate;
  };

  const animeAiredTo = () => {
    const airedTo = anime.data.aired.to ? new Date(anime.data.aired.to.slice(0, 10)) : "?";
    const airedToDate = airedTo.toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    return airedToDate;
  };

  const seasonFirstLetter = () => {
    const word = anime.data.season;
    const firstletter = word?.charAt(0).toUpperCase();
    const result = word?.slice(1).toLowerCase();

    return firstletter + result;
  };

  // Function Component
  const AnimeHeaderDetail = () => {
    return (
      <div className="p-2 text-textDark dark:text-textLight border border-helper rounded-xl">
        <div className="sm:flex grid grid-cols-1 gap-2">
          <div className="mr-1 sm:border-r sm:border-r-helper p-2">
            <p className="md:px-0 sm:px-6 px-0 flex justify-center bg-active h-4 text-textLight dark:text-textLight rounded-sm text-[10px] md:text-xs">SCORE</p>
            <p className="flex justify-center text-textDark dark:text-textLight text-xl md:text-2xl font-semibold">{anime.data.score ? anime.data.score : 0}</p>
            <p className="py-1 sm:py-0 sm:border-none border-b border-b-helper flex justify-center items-center text-textDark dark:text-textLight text-[10px] md:text-xs">
              {anime.data.scored_by ? anime.data.scored_by.toLocaleString("en-US", { maximumFractionDigits: 0 }) : 0} users
            </p>
          </div>
          <div className="flex mr-1 items-center sm:border-none border-b border-b-helper">
            <p className="sm:border-r-[#9498a1] sm:border-r px-2 sm:text-base text-sm">
              Ranked <span className="font-semibold sm:text-base text-sm">#{anime.data.rank || 0}</span>
            </p>
          </div>
          <div className="flex mr-1 items-center sm:border-none border-b border-b-helper">
            <p className="sm:border-r-[#9498a1] sm:border-r px-2 sm:text-base text-sm">
              Popularity <span className="font-semibold sm:text-base text-sm">#{anime.data.popularity || 0}</span>
            </p>
          </div>
          <div className="flex mr-1 items-center sm:border-none border-b border-b-helper">
            <p className="px-2 sm:text-base text-sm">
              Members <span className="font-semibold sm:text-base text-sm">{anime.data.members.toLocaleString("en-US", { maximumFractionDigits: 0 })}</span>
            </p>
          </div>
        </div>
        <div className="flex text-xs my-1 md:pl-[104px] sm:pl-[88px]">
          <p className="border-r-[#9498a1] border-r px-2">
            {seasonFirstLetter() || "Undefined"} {anime.data.year}
          </p>
          <p className="border-r-[#9498a1] border-r px-2">{anime.data.type}</p>
          <p className="px-2">{getProducersData}</p>
        </div>
      </div>
    );
  };

  const AnimeDescription = () => {
    return (
      <>
        <div className="p-2 grid grid-cols-1 text-textDark dark:text-textLight border-helper border rounded-xl">
          <p className="font-semibold border-b border-b-helper">Sinopsis</p>
          <p className="text-xs sm:text-sm text-justify sm:line-clamp-none line-clamp-3">{anime.data.synopsis ? anime.data.synopsis : "No synopsis information has been added to this title."}</p>
        </div>
        <div className="p-2 my-4 grid grid-cols-1 text-textDark dark:text-textLight border-helper border rounded-xl">
          <p className="font-semibold border-b border-b-helper">Background</p>
          <p className="text-xs sm:text-sm text-justify sm:line-clamp-none line-clamp-3">{anime.data.background ? anime.data.background.replace(/;/g, " ") : "No background information has been added to this title."}</p>
        </div>
      </>
    );
  };

  const AnimeInformation = () => {
    return (
      <>
        <p className="border-b border-b-helper py-1 text-sm font-semibold">Information</p>
        <p className="text-xs pt-2">Type: {anime.data.type || "Undefined"}</p>
        <p className="text-xs pt-2">Episodes: {anime.data.episodes || "Undefined"}</p>
        <p className="text-xs pt-2">Status: {anime.data.status || "Undefined"}</p>
        <p className="text-xs pt-2">
          Aired: {animeAired()} To {animeAiredTo()}
        </p>
        <p className="text-xs pt-2">
          Premiered: {upperFirstCharacter()} {anime.data.year}
        </p>
        <p className="text-xs pt-2">
          Broadcast: {anime.data.broadcast.day || "Undefined"} at {anime.data.broadcast.time || "Undefined"} {anime.data.broadcast.timezone || "Undefined"}
        </p>
        <p className="text-xs pt-2">Producers: {getAllProducersDatas}</p>
        <p className="text-xs pt-2">Licensors: {getAllLicensorsDatas}</p>
        <p className="text-xs pt-2">Studios: {getAllStudiosDatas}</p>
        <p className="text-xs pt-2">Source: {anime.data.source || "Undefined"}</p>
        <p className="text-xs pt-2">Genres: {getAllGenresDatas}</p>
        <p className="text-xs pt-2">Theme: {getAllThemeDatas}</p>
        <p className="text-xs pt-2">Demographics: {getAllDemographicsDatas}</p>
        <p className="text-xs pt-2">Duration: {anime.data.duration + "." || "Undefined"}</p>
        <p className="text-xs pt-2">Rating: {anime.data.rating || "Undefined"}</p>
      </>
    );
  };

  const AnimeStatistics = () => {
    return (
      <>
        <p className="border-b border-b-helper py-1 text-sm font-semibold">Statistics</p>
        <p className="text-xs pt-2">
          Score: {anime.data.score || 0} (scored by {anime.data.scored_by ? anime.data.scored_by.toLocaleString("en-US", { maximumFractionDigits: 0 }) : 0} users)
        </p>
        <p className="text-xs pt-2">Ranked: #{anime.data.rank || 0}</p>
        <p className="text-xs pt-2">Popularity: #{anime.data.popularity || 0}</p>
        <p className="text-xs pt-2">Members: {anime.data.members.toLocaleString("en-US", { maximumFractionDigits: 0 }) || 0}</p>
        <p className="text-xs pt-2">Favorites: {anime.data.favorites.toLocaleString("en-US", { maximumFractionDigits: 0 }) || 0}</p>
      </>
    );
  };

  const AnimeCharactersAndVoices = () => {
    return (
      <div className="p-1 mb-4 grid grid-cols-1 border border-helper rounded-xl text-textDark dark:text-textLight">
        <p className="font-semibold border-b border-b-helper">Characters & Voice Actros</p>
        <div className="pt-2 grid lg:grid-cols-2 gap-2 lg:h-full md:h-[310px] sm:h-72 h-72 overflow-auto">
          <AnimeCharacterAndVoice api={characters}></AnimeCharacterAndVoice>
        </div>
      </div>
    );
  };

  const AnimeStaffs = () => {
    return (
      <div className="p-1 mb-4 grid grid-cols-1 border border-helper rounded-xl text-textDark dark:text-textLight">
        <p className="font-semibold border-b border-b-helper">Staff</p>
        <div className="pt-2 grid lg:grid-cols-2 gap-2 lg:h-full md:h-[310px] sm:h-80 h-[355px] overflow-auto">
          {staffs.data.slice(0, 4).map(
            (
              staff: {
                person: {
                  name: string;
                  images: {
                    jpg: {
                      image_url: string;
                    };
                  };
                };
                positions: string[];
              },
              index: number
            ) => (
              <div key={index} className="md:flex md:justify-between">
                <div className="flex">
                  <Image src={staff.person.images.jpg.image_url} alt={`Staff${index}`} width={42} height={65} className="imageCharacters"></Image>
                  <div className="text-sm px-1">
                    <p>{staff.person.name}</p>
                    <p>{staff.positions.join(", ")}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  };

  const AnimeAudio = () => {
    return (
      <div className="p-1 mb-4 grid grid-cols-2 gap-2 border border-helper rounded-xl text-textDark dark:text-textLight">
        <div>
          <p className="font-semibold border-b border-b-helper">Opening Themes</p>
          {audioThemes.data.openings.map((opening: string, index: number) => (
            <p key={index}>{opening}</p>
          ))}
        </div>
        <div>
          <p className="font-semibold border-b border-b-helper">Ending Themes</p>
          {audioThemes.data.endings.map((ending: string, index: number) => (
            <p key={index}>{ending}</p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <main>
      <div className="md:max-w-7xl sm:max-w-2xl max-w-full mx-auto mt-10 border border-helper rounded-xl ">
        <p className="font-bold md:text-3xl sm:text-2xl text-xl text-textDark dark:text-textLight p-4">{anime.data.title.replace(/[^a-zA-Z0-9 ]/g, " ")}</p>
        <div className="flex border-t-helper border-t">
          <div className="md:w-60 sm:w-[305px] w-[325px] p-1 text-textDark dark:text-textLight border-r border-r-helper">
            <Image width={200} src={anime.data.images.webp.image_url} height={250} alt={anime.data.images.jpg.image_url} className="rounded-lg"></Image>
            <AlternativeTitle synonyms={anime.data.title_synonyms} japanese={anime.data.title_japanese} english={anime.data.title_english}></AlternativeTitle>
            <div className="my-4 text-justify">{AnimeInformation()}</div>
            <div className="my-4 text-justify">{AnimeStatistics()}</div>
          </div>
          <div className="w-full">
            <div className="w-full p-2">{AnimeHeaderDetail()}</div>
            <div className="w-full p-2">{AnimeDescription()}</div>
            <div className="w-full p-2">{AnimeCharactersAndVoices()}</div>
            <div className="w-full p-2">{AnimeStaffs()}</div>
            <div className="w-full p-2">{AnimeAudio()}</div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Page;
