import Image from "next/image";
import Link from "next/link";
import ImageComponent from "@/components/AnimeList/ImageComponent/Image";

const AnimeList = ({ apiTop }: any) => {
  return (
    <>
      <section className="p-4 max-w-6xl md:mx-auto ">
        <div className="p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {apiTop.data?.map(
            (
              animeTops: {
                mal_id: number;
                images: {
                  webp: {
                    image_url: string;
                  };
                };
                trailer: {
                  url: String;
                };
                title: string;
              },
              index: number
            ) => {
              return (
                <div key={index}>
                  <div className="flex justify-center">
                    <figure className="hover:translate hover:scale-105 duration-300">
                      <Link href={`/anime/${animeTops.mal_id}`}>
                        <Image src={animeTops.images.webp.image_url} width={123} height={232} alt={animeTops.title} className="rounded-lg shadow-xl" priority={true} unoptimized></Image>
                      </Link>
                    </figure>
                  </div>
                  <div className="text-textDark dark:text-textLight">
                    <ImageComponent title={animeTops.title}></ImageComponent>
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
export default AnimeList;
