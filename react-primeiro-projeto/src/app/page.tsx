/* Importação de componente do tipo default
import Square from '@/components/Geo';
*/

/*
* Importação de componentes padrões e não padrões
*/
import Square, {Circle } from '@/components/Geo';

/* Posso escrever assim
function Page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3>Algum outro texto</h3>
    </div>
  );
}
*/

/* Ou assim: */
const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3>Algum outro texto</h3>

      <Square />
      <Circle />
    </div>
  );
}
export default Page;