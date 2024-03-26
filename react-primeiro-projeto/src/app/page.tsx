"use client"

import { VideoPlayer } from "@/components/VideoPlayer";
import { useEffect, useState } from "react";

const Page = () => {
  const [playing, setPlaying] = useState(false);

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

  return (
    <div className="">
      <div className="border border-white p-3 mb-4">
        <p className="text-2xl text-blue-400 mb-3">
          {playing ? 'RODANDO' : 'PAUSADO'}
        </p>
        <button className="bg-blue-400 rounded-md p-3 text-black" onClick={() => setPlaying(!playing)}>
          Play/Pause
        </button>
      </div>

      <VideoPlayer
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        isPlaying={playing}
      />
    </div>
  );
}

export default Page;