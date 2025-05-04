import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="bg-gray-900 absolute flex min-w-full pt-14 justify-center items-center">
      <Image width={500} height={500} src="/image/phixd01.png" alt="PHIXD" />
    </div>
  );
}
