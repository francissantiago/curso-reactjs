/* Exportação de componente do tipo default
const Square = () => {
    return (
        <div className="w-52 h-52 bg-orange-700 text-white">
            Texto qualquer inspirador
        </div>
    );
}

export default Square;
*/

/* Exportação de componente sem ser padrão*/
export const Square = () => {
    return (
        <div className="w-52 h-52 bg-orange-700 text-white">
            Texto qualquer inspirador
        </div>
    );
}

export const Circle = () => {
    return (
        <div className="w-52 h-52 bg-orange-700 text-white rounded-full">
            Texto qualquer inspirador
        </div>
    );
}