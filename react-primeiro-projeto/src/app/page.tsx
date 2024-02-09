"use client"

const Page = () => {

  // Não fazer assim!
  const handleClick = () => {
    alert("Tudo certo!");
  }

  const avisar = (msg: string) => {
    alert(msg);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
     {/*
      Não fazer assim!
      <button onClick={handleClick()} className="p-3 bg-blue-700 text-white rounded-md mr-3">Clique aqui</button>
    */}

      <button onClick={() => avisar('mensagem 1')} className="p-3 bg-blue-700 text-white rounded-md mr-3">Clique aqui</button>
      <button onClick={() => avisar('mensagem 2')} className="p-3 bg-blue-700 text-white rounded-md mr-3">Clique aqui</button>


    </div>
  );
}

export default Page;