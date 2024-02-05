import Image from "next/image";

const AnimeCharacterAndVoice = ({ api }: any) => {
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
          <div key={index} className="md:flex md:justify-between">
            <div className="flex">
              <Image src={datas.character.images.webp.image_url} alt={`Characters${index}`} width={42} height={65} className="imageCharacters"></Image>
              <div className="text-sm px-1">
                <p>{datas.character.name}</p>
                <p>{datas.role}</p>
              </div>
            </div>
            <div className="flex lg:flex-row-reverse" key={index}>
              <Image src={datas.voice_actors[0].person.images.jpg.image_url} alt={`Voice Actors${index}`} width={42} height={65} className="imageCharacters"></Image>
              <div className="text-sm px-1">
                <p>{datas.voice_actors[0].person.name}</p>
                <p className="md:text-right text-left">{datas.voice_actors[0].language}</p>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};
export default AnimeCharacterAndVoice;
