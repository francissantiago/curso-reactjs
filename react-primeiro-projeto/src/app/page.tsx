"use client"

import { useEffect, useState } from "react";

const Page = () => {
  const [name, setName] = useState('Santiago');
  const [age, setAge] = useState(90);

  /**
  * 1. Definição da função que vai rodar.
  * 2. Definição de QUANDO vai rodar.
  * 3. Definição do que fazer quando o componente sumir/unload.
  **/

  /**
   * Definição 01 - O Effect roda SEMPRE que um componente é renderizado:
      useEffect(() => {
        console.log('RODOU O EFFECT');
      });
   **/

    /**
    * Definição 02 - O Effect roda APENAS quando um componente específico é renderizado:
        useEffect(() => {
          console.log('RODOU O EFFECT');
        }, []); // Executar apenas quando a página é carregada

        useEffect(() => {
          console.log('RODOU O EFFECT');
        }, [name]);

        useEffect(() => {
          console.log('RODOU O EFFECT');
        }, [age]);
    **/

  useEffect(() => {
    console.log('RODOU O EFFECT');
  }, [age]);

  return (
    <div className="">
      <p>Meu nome é {name} e eu tenho {age} anos</p>
      <hr />
      <button className="border border-blue-400 m-3 p-3" onClick={() => setName('Francis')}>Mudar para Francis</button>
      <button className="border border-blue-400 m-3 p-3" onClick={() => setName('Santana')}>Mudar para Santana</button>
      <button className="border border-blue-400 m-3 p-3" onClick={() => setAge(10)}>Mudar para 10 anos</button>
      <button className="border border-blue-400 m-3 p-3" onClick={() => setAge(90)}>Mudar para 90 anos</button>
    </div>
  );
}

export default Page;