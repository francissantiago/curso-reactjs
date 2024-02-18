"use client"

import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);

  const handleBtnClick = () => {
    setCount(count + 2);
    setCount(c => c + 2); // Resgata o valor já salvo na memória e exibe o valor atualizado
    setCount(c => c + 2); // Resgata o valor já salvo na memória e exibe o valor atualizado
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <p>{count}</p>
      <button onClick={handleBtnClick} className="bg-blue-700 text-white p-3 rounded-md">+2</button>
    </div>
  );
}

export default Page;