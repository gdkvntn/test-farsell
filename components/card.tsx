"use client";
import { factType } from "@/types";
import React from "react";

export const Card = ({ data }: { data: factType }) => {
  return (
    <div className=" h-24 bg-light-beige rounded-lg border border-brown">
      <div className="p-2 flex flex-col">
        <h2 className="font-bold">Cat fact</h2>
        <p className="md:text-xs text-sm mt-1 mb-2 overflow-auto h-10">
          {data.fact}
        </p>
      </div>
    </div>
  );
};
