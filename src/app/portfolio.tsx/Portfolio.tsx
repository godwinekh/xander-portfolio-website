"use client";
import { Fragment } from "react";
import ContentDesigns from "./ContentDesigns";
import MoreContent from "./MoreContent";
import UIDesigns from "./UIDesigns";

export default function Portfolio() {

  return (
    <Fragment>
      <div
        id="portfolio"
        className="px-32 py-10 bg-[#F6EDED] text-black rounded-t-[5rem] -mt-16"
      >
        <div className="flex justify-start items-baseline gap-16 mb-16">
          <h2 className="text-8xl font-extrabold">
            Portfolio<span className="text-[#F80000]">.</span>
          </h2>
          <p className="text-[#F80000] font-semibold">
            Every project is a journey, never settle
          </p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-6">
          <UIDesigns />
          <ContentDesigns />
        </div>
      </div>
      <MoreContent />
    </Fragment>
  );
}
