"use client";

import { getData } from "@/lib/data";
import { factType } from "@/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { Spinner } from "./spinner";

export const RandomCard = () => {
  const { data, error, isLoading, mutate } = useSWR<factType>(
    "/fact",
    getData,
    {
      revalidateOnFocus: false,
    }
  );
  const [facts, setFacts] = useState<factType[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentFact, setCurrentFact] = useState(data);

  const handleFetchNewFact = async () => {
    const newFact: factType = await getData("/fact");

    mutate(newFact, false);
  };

  const changeFact = (variant: string) => {
    switch (variant) {
      case "left":
        if (currentIndex <= 0) return;
        setCurrentIndex((prevIndex) => prevIndex - 1);

        break;
      case "right":
        if (currentIndex >= facts.length - 1) return;
        setCurrentIndex((prevIndex) => prevIndex + 1);

        break;
    }
  };

  useEffect(() => {
    setCurrentFact(facts[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    if (data) {
      setFacts((prev) => {
        const updatedFacts = [...prev, data];
        setCurrentIndex(updatedFacts.length - 1);
        return updatedFacts;
      });
      setCurrentFact(data);
    }
  }, [data]);

  return (
    <div className="md:text-xs  w-full min-w-full h-36 bg-light-beige flex rounded-lg border border-brown">
      <div className="sm:basis-auto p-2 flex  flex-col basis-1/2">
        <h2 className=" font-bold">Random Fact</h2>
        {isLoading && <Spinner />}
        {error && <p className="text-red-600">ERROR</p>}
        <p className=" md:text-xs text-sm mt-1 mb-2 overflow-auto">
          {currentFact?.fact}
        </p>
        <div className="flex gap-1">
          <button
            onClick={handleFetchNewFact}
            className="w-fit mt-auto border border-brown p-1 rounded-lg text-xs"
          >
            Regenerate
          </button>
          <button
            disabled={currentIndex <= 0}
            onClick={() => changeFact("left")}
            className="disabled:bg-brown/40 bg-light-beige border border-brown rounded w-6 h-6 flex justify-center items-center"
          >
            {" "}
            &#8592;
          </button>
          <button
            disabled={currentIndex >= facts.length - 1}
            onClick={() => changeFact("right")}
            className=" disabled:bg-brown/40 bg-light-beige border border-brown rounded w-6 h-6 flex justify-center items-center"
          >
            {" "}
            &#8594;
          </button>
        </div>
      </div>
      <div className="sm:hidden  basis-1/2 relative w-full border-l border-brown">
        <Image
          className="rounded-r-lg"
          src="/catRandomBlock.webp"
          alt="cat"
          fill
          sizes="100% 100%"
        />
      </div>
    </div>
  );
};
