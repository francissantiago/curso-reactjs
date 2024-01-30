/* Importação de componentes */
import { Person } from "@/components/Person";

const Page = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3>Algum outro texto</h3>

      <Person
        name = "Elon Musk"
        avatar = "https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
        roles = {["CEO da Tesla","CEO da SpaceX"]}
      />
      <Person
        name = "Jeff Bezos"
        avatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg/200px-Jeff_Bezos_visits_LAAFB_SMC_%283908618%29_%28cropped%29.jpeg"
        roles = {["CEO da Amazon","CEO da Blue Origin"]}
      />
    </div>
  );
}
export default Page;