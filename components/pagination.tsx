"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const getPagination = (page: number, maxPages: number): number[] => {
  let startPage, endPage;

  if (page <= 3) {
    startPage = 1;
    endPage = Math.min(5, maxPages);
  } else if (page > maxPages - 2) {
    startPage = Math.max(1, maxPages - 4);
    endPage = maxPages;
  } else {
    startPage = page - 2;
    endPage = page + 2;
  }

  const pagination = [];
  for (let i = startPage; i <= endPage; i++) {
    pagination.push(i);
  }
  return pagination;
};

export function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;
  const pageNumbers = getPagination(currentPage, totalPages);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className=" sm:text-xs flex gap-1 my-4 justify-center text-sm">
      <button
        onClick={() => router.push(createPageURL(currentPage - 1))}
        className="sm:w-4 sm:h-4 disabled:bg-dark-beige bg-light-beige border border-brown rounded w-6 h-6 flex justify-center items-center"
        disabled={currentPage === 1}
      >
        &#8592;
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => router.push(createPageURL(page))}
          className={`${
            currentPage === page ? " bg-brown/30" : "bg-light-beige"
          } sm:w-4 sm:h-4 border  border-brown rounded w-6 h-6 flex justify-center items-center`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => router.push(createPageURL(currentPage + 1))}
        disabled={currentPage === totalPages}
        className="sm:w-4 sm:h-4 disabled:bg-dark-beige bg-light-beige border border-brown rounded w-6 h-6 flex justify-center items-center"
      >
        &#8594;
      </button>
    </div>
  );
}
