import React from "react";
import { Card } from "./card";
import { factType } from "@/types";
import { getData } from "@/lib/data";
import { Pagination } from "./pagination";

interface Factsprops {
  data: factType[] | undefined;
  last_page: number;
}

interface SearchParamsProps {
  searchParams?: {
    page?: string;
    query?: string;
  };
}

export const CardList = async ({
  searchParams,
}: Readonly<SearchParamsProps>) => {
  const page = searchParams?.page || 1;
  const result: Factsprops = await getData(`/facts?page=${page}`);
  const totalPages = result["last_page"];

  return (
    <div>
      <div className="sm:grid-cols-1 md:text-xs grid grid-cols-2 flex-wrap gap-2 mt-2">
        {result.data &&
          result.data.map((el, i) => {
            return <Card key={i} data={el} />;
          })}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  );
};
