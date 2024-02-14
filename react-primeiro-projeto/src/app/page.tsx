"use client"

import { FormEvent } from "react";

const Page = () => {
  let count = 0;
  const handleClickButton = () => {
    count = count + 1;
    console.log(count);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <button onClick={handleClickButton} className="bg-blue-500 p-3">+1</button>
    </div>
  );
}

export default Page;