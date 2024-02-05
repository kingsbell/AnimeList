// "use client";
// import { CaretLeft, CaretRight } from "@phosphor-icons/react";
// import { useState } from "react";

// const Carousel = ({ children: arrAnimeData }: any) => {
//   const [videoSlide, setVideoSlide] = useState(0);

//   const prev = () => {
//     setVideoSlide((videoSlide) => (videoSlide === 0 ? arrAnimeData.length - 1 : videoSlide - 1));
//   };
//   console.log(prev);

//   const next = () => {
//     setVideoSlide((videoSlide) => (videoSlide === arrAnimeData.length - 1 ? 0 : videoSlide + 1));
//   };
//   return (
//     <div className="overflow-hidden relative">
//       <div className="flex min-h-full justify-center transition-transform duration-700 ease-out w-screen" style={{ transform: `translateX(-${videoSlide * 100}%)` }}>
//         {arrAnimeData}
//       </div>
//       <div className="absolute left-2 bottom-1/2 pl-2">
//         <button onClick={prev} className="p-1 bg-white transition rounded-full opacity-20 hover:opacity-80 hover:bg-white hover:ease-in-out hover:duration-500">
//           <CaretLeft width={34}></CaretLeft>
//         </button>
//       </div>
//       <div className="absolute right-2 bottom-1/2 pr-2">
//         <button onClick={next} className="p-1 bg-white transition rounded-full opacity-20 hover:opacity-80 hover:bg-white hover:ease-in-out hover:duration-500">
//           <CaretRight width={34}></CaretRight>
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Carousel;
