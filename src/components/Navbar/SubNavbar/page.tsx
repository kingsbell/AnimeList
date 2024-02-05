const SubNavbar = ({ apiTrailer }: any) => {
  return (
    <div className="w-full ">
      {apiTrailer.data.map(
        (list: {
          mal_id: number;
          trailer: {
            embed_url: string;
          };
        }) => {
          const animeDataTrailer = list.trailer.embed_url;
          return <iframe key={list.mal_id} src={animeDataTrailer} frameBorder={0} className="w-full aspect-[12/4]"></iframe>;
        }
      )}
    </div>
  );
};

export default SubNavbar;
