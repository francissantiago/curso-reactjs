/* Importação de componentes */
import { EmojiRating } from "@/components/EmojiRating";

const Page = () => {

  const fullTime = new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
    hour12: false
  }).format();

  const hour = new Date().getHours();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <EmojiRating rate={3.2} />
    </div>
  );
}
export default Page;