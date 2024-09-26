import React from "react";

export const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen bg-dark-beige flex justify-between">
      <div className=" md:hidden min-h-screen w-1/5 bg-[url('/catBg.webp')] bg-[length:33.3%] bg-repeat bg-left-top "></div>
      <div className="md:px-5 sm:px-2">{children}</div>
      <div className=" md:hidden min-h-screen w-1/5 bg-[url('/catBg.webp')] bg-[length:33.3%] bg-repeat bg-right-top "></div>
    </div>
  );
};
