import Image from "next/image";

const AnimeCharacterAndVoice = async ({ api }: any) => {
  return (
    <>
      {api.data.slice(0, 10).map(
        (
          datas: {
            voice_actors: any;
            role: string;
            character: {
              name: string;
              images: {
                webp: {
                  image_url: string;
                };
              };
              voice_actors: Array<{
                language: string;
                person: {
                  name: string;
                  images: {
                    jpg: {
                      image_url: string;
                    };
                  };
                };
              }>;
            };
          },
          index: number
        ) => (
          <div key={index} className="lg:flex lg:justify-between hidden">
            <div className="flex">
              <Image src={datas.character.images.webp.image_url} alt={`Characters${index}`} width={42} height={65} className="imageCharacters"></Image>
              <div className="text-sm">
                <p>{datas.character.name}</p>
                <p>{datas.role}</p>
              </div>
            </div>
            <div className="flex flex-row-reverse" key={index}>
              <Image src={datas.voice_actors[0].person.images.jpg.image_url} alt={`Voice Actors${index}`} width={42} height={65} className="imageCharacters"></Image>
              <div className="text-sm">
                <p>{datas.voice_actors[0].person.name}</p>
                <p className="text-right">{datas.voice_actors[0].language}</p>
              </div>
            </div>
          </div>
        )
      )}

      {/* Device Medium */}
      {api.data.slice(0, 10).map(
        (
          datas: {
            voice_actors: any;
            role: string;
            character: {
              name: string;
              images: {
                webp: {
                  image_url: string;
                };
              };
              voice_actors: Array<{
                language: string;
                person: {
                  name: string;
                  images: {
                    jpg: {
                      image_url: string;
                    };
                  };
                };
              }>;
            };
          },
          index: number
        ) => (
          <div className="lg:hidden md:flex sm:hidden">
            <div>Kotak 1 </div>
            <div>Kotak 2</div>
          </div>
        )
      )}
    </>
  );
};
export default AnimeCharacterAndVoice;
