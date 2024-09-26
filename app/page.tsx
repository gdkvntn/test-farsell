import { CardList } from "@/components/cardList";
import { RandomCard } from "@/components/randomCard";
import { Spinner } from "@/components/spinner";
import { Suspense } from "react";

interface SearchParamsProps {
  searchParams?: {
    page?: string;
    query?: string;
  };
}

export default async function Home({
  searchParams,
}: Readonly<SearchParamsProps>) {
  return (
    <div className="md:w-full w-[600px] flex flex-col items-center">
      <h1 className="md:text-3xl pt-12 text-6xl font-bold">Cat Facts</h1>
      <p className=" pt-3 text-center">No random cat facts</p>
      <div className="pt-3 w-full text-center">
        {" "}
        <RandomCard />
        <Suspense fallback={<Spinner />}>
          <CardList searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
}
