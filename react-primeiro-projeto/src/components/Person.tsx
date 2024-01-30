const getWeekday = (today: Date) => {
    return new Intl.DateTimeFormat('pt-BR', { weekday: 'long' }).format(today);
}

export const Person = () => {
    /* Regra 1: Retorno de um único elemento padrão(apenas um return) */
    /* Regra 2: Feachar todas as tags */
    /* Regra 3: camelCase em todas as propriedades que tenham 2 palavras como className, onClick, etc. */

    const data = {
        name: 'Elon Musk',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg',
        roles: ['CEO da Tesla', 'CEO da SpaceX']
    }

    const today: Date = new Date();
    return (
        <>
            <h1>{data.name} - {getWeekday(today)}</h1>
            <img
                src={data.avatar}
                alt={data.name}
                className="w-40"
            /> 
            <ul>
                <li>{data.roles[0]}</li>
                <li>{data.roles[1]}</li>
            </ul>
        </>
    );
}