import Image from "next/image";
import Link from "next/link";
import ImageComponent from "@/components/AnimeList/ImageComponent/Image";

const MangaList = ({ apiManga }: any) => {
  return (
    <>
      <section className="p-4 max-w-6xl md:mx-auto ">
        <div className="p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {apiManga.data.map(
            (
              mangaTops: {
                mal_id: number;
                images: {
                  webp: {
                    image_url: string;
                  };
                };
                title: string;
              },
              index: number
            ) => {
              return (
                <div key={index}>
                  <div className="flex justify-center">
                    <figure className="hover:translate hover:scale-105 duration-300">
                      <Link href={`/${mangaTops.mal_id}`}>
                        <Image src={mangaTops.images.webp.image_url} width={123} height={232} alt={mangaTops.title} className="rounded-lg" priority={true} unoptimized></Image>
                      </Link>
                    </figure>
                  </div>
                  <div className="text-textDark dark:text-textLight">
                    <ImageComponent title={mangaTops.title}></ImageComponent>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>
    </>
  );
};
export default MangaList;
