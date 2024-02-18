"use client"

import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);

  /* O state só é alterado(renderizado) no cliente quando a função estiver terminado por completo */
  const handleBtnClick = () => {
    console.log('count 0: ', count);
    setCount(count + 2);
    console.log('count 1: ', count);
    setCount(count + 2);
    console.log('count 2: ', count);
    setCount(count + 2);
    console.log('count 3: ', count);
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <button onClick={handleBtnClick} className="bg-blue-700 text-white p-3 rounded-md">+2</button>
    </div>
  );
}

export default Page;