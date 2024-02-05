// // import Carousel from "@/components/Navbar/SubNavbar/carousel";

// const SubNavbar = ({ apiTrailer }: any) => {
//   const arrAnimeData: string[] = [];

//   apiTrailer.data.forEach(
//     (list: {
//       mal_id: number;
//       trailer: {
//         embed_url: string;
//       };
//     }) => {
//       const animeTrailer = list.trailer.embed_url || null;
//       if (animeTrailer) {
//         arrAnimeData.push(animeTrailer);
//       }
//     }
//   );

//   // console.log(arrAnimeData);
//   return (
//     <Carousel key={apiTrailer.mal_id}>
//       {arrAnimeData.map((s, index) => {
//         return arrAnimeData ? <iframe key={index} src={s} width={1440} height={500} allowFullScreen></iframe> : null;
//       })}
//     </Carousel>
//   );
// };

// export default SubNavbar;
