type Props = {
    name: string;
    avatar: string;
    roles: string[];
}

export const Person = ({ name, avatar, roles}: Props) => {
    /* Regra 1: Retorno de um único elemento padrão(apenas um return) */
    /* Regra 2: Feachar todas as tags */
    /* Regra 3: camelCase em todas as propriedades que tenham 2 palavras como className, onClick, etc. */

    return (
        <div className="p-3">
            <h1>{name}</h1>
            <img
                src={avatar}
                alt={name}
                className="w-40"
            /> 
            <ul>
                <li>{roles[0]}</li>
                <li>{roles[1]}</li>
            </ul>
        </div>
    );
}