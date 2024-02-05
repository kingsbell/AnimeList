"use client";

import { useState } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react/dist/ssr";

const AlternativeTitle = ({ synonyms, english, japanese }: any) => {
  const [openButton, setOpenButton] = useState(false);

  const buttonOpenTitle = () => {
    setOpenButton((open) => !open);
  };

  const animeSynonymsValidation = () => {
    const animeSynonyms = synonyms;

    if (animeSynonyms && animeSynonyms.length > 0) {
      return animeSynonyms;
    } else {
      return "Undefined";
    }
  };

  return (
    <div className="my-2">
      <p className="border-b border-b-helper py-1 text-sm font-semibold">Alternative Titles</p>

      <p className="text-xs pt-2">Synonyms: {animeSynonymsValidation()}</p>
      {openButton ? (
        <>
          <p className="text-xs pt-2">Japanese: {japanese ? japanese : "Undefined"}</p>
          <p className="text-xs pt-2">English: {english ? english.replace(/[^a-zA-Z0-9 ]/g, " ") : "Undefined"}</p>
          <button className="flex text-xs items-center pt-2 hover:text-active" onClick={buttonOpenTitle}>
            <CaretUp size={15} className="text-active" />
            <p className="pl-1">Less Titles</p>
          </button>
        </>
      ) : (
        <>
          <p className="text-xs pt-2">Japanese: {japanese ? japanese : "Undefined"}</p>
          <button className="flex text-xs items-center pt-2 hover:text-active" onClick={buttonOpenTitle}>
            <CaretDown size={15} className="text-active" />
            <p className="pl-1">More Titles</p>
          </button>
        </>
      )}
    </div>
  );
};
export default AlternativeTitle;
