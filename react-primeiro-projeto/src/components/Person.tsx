export const Person = () => {
    /* Regra 1: Retorno de um único elemento padrão(apenas um return) */
    /* Regra 2: Feachar todas as tags */
    /* Regra 3: camelCase em todas as propriedades que tenham 2 palavras como className, onClick, etc. */
    return (
        <>
            <h1>Elon Musk</h1>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
                alt="Elon Musk"
                className="w-40"
            /> 
            <ul>
                <li>CEO da Tesla</li>
                <li>CEO da SpaceX</li>
                <li>CEO da ...</li>
            </ul>
        </>
    );
}