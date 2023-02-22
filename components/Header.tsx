import Link from "next/link";
import React, { FC } from "react";

type HeaderProps = {
  children?: React.ReactNode;
};

const Header: FC<HeaderProps> = (props) => {
  return (
    <div className="bg-gray-800  sticky top-0 z-10">
      <div className="container">
        <header className="flex items-center justify-center h-20 ">
          <Link href={"/"} className="text-gray-100 font-semibold text-3xl">
            Friends Gallery
          </Link>
        </header>
      </div>
    </div>
  );
};

export default Header;
