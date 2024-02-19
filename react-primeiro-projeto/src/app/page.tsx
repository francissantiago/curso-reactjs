"use client"

import { Person } from "@/types/Person";
import { useState } from "react";

const Page = () => {
  const [fullName, setFullName] = useState<Person>({name: 'Francis', lastName: 'Santana'});

  const handleClearNameButton = () => {
    setFullName({...fullName, name: ''});
  }

  const handleClearLastNameButton = () => {
    setFullName({...fullName, lastName: ''});
  }

  const handleClearButton = () => {
      setFullName({name: '', lastName: ''});
    }
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
      <input
        type="text"
        placeholder="Nome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.name}
        onChange={e => setFullName({ ...fullName, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Sobrenome"
        className="border border-black p-3 text-2xl text-black rounded-md mb-3"
        value={fullName.lastName}
        onChange={e => setFullName({ ...fullName, lastName: e.target.value })}
      />

      <p>Meu nome completo é:</p>
      <p>{fullName.name} {fullName.lastName}</p>

      <button className="mb-2 rounded-md bg-blue-700 p-3" onClick={handleClearNameButton}>Limpar Nome</button>
      <button className="mb-2 rounded-md bg-blue-700 p-3" onClick={handleClearLastNameButton}>Limpar Sobrenome</button>
      <button className="mb-2 rounded-md bg-blue-700 p-3" onClick={handleClearButton}>Limpar Tudo</button>
    </div>
  );
}

export default Page;